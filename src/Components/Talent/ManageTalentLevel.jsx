import React, { useState, useEffect } from 'react';
import style from "./ManageTalentLevel.module.css";
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageTalentLevel = () => {
  const [data, setData] = useState(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [editedData, setEditedData] = useState({
    images: null,
    count: '',
    level: '',
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedActions, setSelectedActions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://use2fun.onrender.com/admin/talentLevel/getall");
      if (!response.ok) {
        throw new Error("An error occurred");
      };
      const jsonData = await response.json()
      setData(jsonData.data);
      console.log("result", jsonData.data);
      setSelectedActions(Array(jsonData.data.length).fill('action'));
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  }

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
        const response = await fetch(`https://use2fun.onrender.com/admin/level/delete/${selectedItemData._id}`, {
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
    formDataToSend.append('count', editedData.count);
    formDataToSend.append('level', editedData.level);
    console.log(editedData._id)
    try {
      const response = await fetch(`https://use2fun.onrender.com/admin/level/update/${editedData._id}`, {
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


  useEffect(() => {
    fetchData()
  }, [])

  const renderTableRows = () => {
    if (!data) {
      <h2>Loading....</h2>
      return (
        <tr>
          <td colSpan="5">
            <h2>Loading...</h2>
          </td>
        </tr>
      );
    } else if (data.length === 0) {

      return (
        <tr>
          <td colSpan="5">
            <h2>No data available</h2>
          </td>
        </tr>
      );
    } else {
      return data.map((row, index) => (
        <tr key={row._id}>
          <td>{index + 1}</td>
          <td>{row.level}</td>
          <td>{row.count}</td>
          <td>
            {row.images.length > 0 ? (
              <img className={style.images} src={row.images[0]} alt='images' width="50" height="50" />
            ) : (
              'No Image'
            )}
          </td>
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
      ));
    }
  };

  return (
    <div>
      <h3>Manage Talent Levels</h3>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Level</th>
            <th>ExpCount</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
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
                <Form.Label>Count</Form.Label>
                <Form.Control
                  type="number"
                  name="count"
                  placeholder="Enter ExpCount"
                  value={editedData.count}
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
  )
}

export default ManageTalentLevel;
