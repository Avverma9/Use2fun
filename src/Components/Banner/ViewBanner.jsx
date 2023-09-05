import React, { useState, useEffect } from "react";
import './ViewBanner.css';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ViewBanner() {
  const [data, setData] = useState([]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [editedData, setEditedData] = useState({
    images: null,
    hyperlink: '',
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedActions, setSelectedActions] = useState([]);


  const fetchData = async () => {
    try {
      const responsedata = await fetch("https://use2fun.onrender.com/admin/banner/getall");
      if (!responsedata.ok) {
        throw new Error("Network issue");
      }
      const response = await responsedata.json();
      setData(response.data);
      setSelectedActions(Array(response.data.length).fill('action'));
    } catch (error) {
      console.error("fetching problem", error)
    }
  
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleDropdownChange = (index, action) => {
    const updatedActions = [...selectedActions];
    updatedActions[index] = action;
    setSelectedActions(updatedActions);
    setSelectedItem(index);

    switch (action) {
      case "update":
        setShowEditModal(true);
        setEditedData(data[index]);
        break;
      case "remove":
        setShowRemoveModal(true);
        break;
      default:
        setSelectedItem(null);
        break;
    }
  }

  const handleConfirmDelete = async () => {
    if (selectedItem !== null) {
      const selectedItemData = data[selectedItem];
      console.log(selectedItemData._id, "Selected Id");

      try {
        const response = await fetch(`https://use2fun.onrender.com/admin/banner/delete/${selectedItemData._id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          toast.error("Error while deleting the data")
        } else {
          toast.success("Data successfully deleted")
        }

        const updatedData = [...data];
        updatedData.splice(selectedItem, 1);
        setData(updatedData);
        const updatedActions = [...selectedActions];
        updatedActions.splice(selectedItem, 1);
        setSelectedActions(updatedActions);


        setShowRemoveModal(false);
        setSelectedItem(null);
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  }

  const handleUpdateSubmit = async () => {
    const formDataToSend = new FormData();
    if (editedData.images) {
      formDataToSend.append('images', editedData.images);
    }

    formDataToSend.append('link', editedData.link);
    console.log(editedData._id)
    try {
      const response = await fetch(`https://use2fun.onrender.com/admin/banner/update/${editedData._id}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (!response.ok) {
        toast.error("Error while updating the data")
      } else {
        toast.success("Data Successfully edited")
      }

      fetchData();
      setShowEditModal(false);
      setSelectedItem(null);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedItem(null);

    if (selectedItem !== null) {
      const updatedActions = [...selectedActions];
      updatedActions[selectedItem] = 'action';
      setSelectedActions(updatedActions);
    }
  };

  const handleCloseRemoveModal = () => {
    setShowRemoveModal(false);
    setSelectedItem(null);

    if (selectedItem !== null) {
      const updatedActions = [...selectedActions];
      updatedActions[selectedItem] = 'action';
      setSelectedActions(updatedActions);
    }
  };



  const handleEditFormChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;

    setEditedData({
      ...editedData,
      [name]: newValue,
    });
  };

  return (
    <div className="main">
      <h3>View Banner</h3>
      {data.length > 0 ? (
        <table className="banner-table">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Banner Image</th>
              <th width="10px">HyperLink</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
           <td className="banner-data">{index + 1}</td>
<td className="banner-data"><img className="imagesbanner" src={item.images[0]} alt='image' /></td>
<td className="banner-data"><a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></td>
                <td>
                <td>
                  <select className="selectbar" value={selectedActions[index]} onChange={(e) => handleDropdownChange(index, e.target.value)}>
                    <option value="action">Action</option>
                    <option value="update">Update</option>
                    <option value="remove">Remove</option>
                  </select>
                </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No banner data available.</p>
      )}

       {/* //Delete Modal  */}
       <Modal show={showRemoveModal} onHide={handleCloseRemoveModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRemoveModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>



      {/* Update Modal  */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              {/* Image */}
              <Form.Group controlId="formBasicImage">
                <Form.Label>Image</Form.Label>
                <div className="mb-2">
                  {/* <img
                    src={editedData.images instanceof Blob ? URL.createObjectURL(editedData.images) : ''}
                    alt="Image Preview"
                    style={{ width: '100px', height: '100px' }}
                  /> */}
                </div>
                <Form.Control
                  type="file"
                  accept="image/*"
                  name="images"
                  onChange={handleEditFormChange}
                />
              </Form.Group>
  
              {/* link */}
              <Form.Group controlId="formBasicDescription">
                <Form.Label>Hyperlink</Form.Label>
                <Form.Control
                  type="text"
                  name="link"
                  placeholder="Enter Hyperlink"
                  value={editedData.link}
                  onChange={handleEditFormChange}
                />
              </Form.Group>
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewBanner;
