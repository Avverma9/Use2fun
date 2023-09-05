import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewSvip.css";
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ViewVip() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [editedData, setEditedData] = useState({
    images: null,
    price: '',
    level: '',
    day: '',
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedActions, setSelectedActions] = useState([]);


  //Get data
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://use2fun.onrender.com/admin/svip/getall"
      );
      if (!response.ok) {
        throw new Error("An error occurred");
      }
      const jsonData = await response.json();
      setData(jsonData.data);
      console.log("result", jsonData.data);
      setSelectedActions(Array(jsonData.data.length).fill('action'));
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

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
        const response = await fetch(`https://use2fun.onrender.com/admin/svip/delete/${selectedItemData._id}`, {
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
    formDataToSend.append('price', editedData.price);
    formDataToSend.append('level', editedData.level);
    formDataToSend.append('day', editedData.day);
    console.log(editedData._id)
    try {
      const response = await fetch(`https://use2fun.onrender.com/admin/svip/update/${editedData._id}`, {
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

  const handleNavigate = () => {
    navigate("/add-svip");
  };

  return (
    <div id="vip_main">
      <div className="vip_header">
        <h3>View Svip</h3>
        <button className="vip_btn" onClick={handleNavigate}>
          Add Svip
        </button>
      </div>

      <table id="vip_table">
        <thead>
          <tr>
            <th className="priceth">Sr.</th>
            <th className="priceth">Vip Image</th>
            <th className="priceth" width="10px">
              Price
            </th>
            <th className="priceth">Level</th>
            <th className="priceth">Validity</th>
            <th className="priceth">Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="row2">
                <td className="price">{index + 1}</td>
                <td className="price">
                  <img className="svipImage" src={item.images[0] || "No data"} alt="image" />
                </td>
                <td className="price">{item.price || "No data"}</td>
                <td className="price">{item.level || "No data"}</td>
                <td className="price">{item.day || "No data"} days</td>
                <td >
                  <select
                    className="selectbar"
                    value={selectedActions[index]}
                    onChange={(e) => handleDropdownChange(index, e.target.value)}
                  >
                    <option value="action">Action</option>
                    <option value="update">Update</option>
                    <option value="remove">Remove</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                {data ? "No data available" : "Loading..."}
              </td>
            </tr>
          )}
        </tbody>
      </table>



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
            {/* Price */}
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter Price"
                value={editedData.price}
                onChange={handleEditFormChange}
              />
            </Form.Group>
            {/* level  */}
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Level</Form.Label>
              <Form.Control
                type="number"
                name="level"
                placeholder="Enter Level"
                value={editedData.level}
                onChange={handleEditFormChange}
              />
            </Form.Group>


            {/* Duration */}
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="number"
                name="day"
                placeholder="Enter Duration"
                value={editedData.day}
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

export default ViewVip;
