import React, { useEffect, useState } from 'react';
import styles from "./ViewFrames.module.css"
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewFrames = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [editedData, setEditedData] = useState({
    images: null,
    price: '',
    level: '',
    day: '',
    is_visible: false,
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedActions, setSelectedActions] = useState([]);

  //GET Frames
  const fetchData = async () => {
    try {
      const response = await fetch("https://use2fun.onrender.com/admin/frame/getall");
      if (!response.ok) {
        throw new Error("network issue");
      }
      const jsonData = await response.json();
      setData(jsonData.data);
      console.log("frame", jsonData.data)
      setSelectedActions(Array(jsonData.data.length).fill('action'));
    } catch (error) {
      console.error("error fetching data", error)
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
        const response = await fetch(`https://use2fun.onrender.com/admin/frame/delete/${selectedItemData._id}`, {
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
    if (editedData.images && typeof editedData.images === 'object') {
      formDataToSend.append('images', editedData.images);
    } else {
      formDataToSend.append('images', editedData.previousImage);
    }

    formDataToSend.append('price', editedData.price);
    formDataToSend.append('level', editedData.level);
    formDataToSend.append('day', editedData.day);
    formDataToSend.append('is_visible', editedData.is_visible)
    console.log(editedData._id);

    try {
      const response = await fetch(`https://use2fun.onrender.com/admin/frame/update/${editedData._id}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (!response.ok) {
        toast.error("Error while updating the data");
      } else {
        toast.success("Data Successfully edited");
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
    const { name, value, type, checked } = e.target;
    const newValue = type === 'file' ? e.target.files[0] : type === 'checkbox' ? checked : value;
  
    setEditedData({
      ...editedData,
      [name]: newValue,
    });
  };


  const handleNavigate = () => {
    navigate('/add-frames')
  }


  return (
    <div className={styles.viewframemain}>
      <h3>View Frames</h3>
      <button className={styles.addframebtn} onClick={handleNavigate}>Add Frame</button>


      <table >
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Frame Image</th>
            <th>Price</th>
            <th>Level</th>
            <th>Validity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img className={styles.images} src={item.images[0]} alt="image" />
                </td>
                <td>{item.price}</td>
                <td>{item.level}</td>
                <td>{item.day}</td>
                <td>
                  <select className={styles.viewframeselect} value={selectedActions[index]} onChange={(e) => handleDropdownChange(index, e.target.value)}>
                    <option value="action">Action</option>
                    <option value="update">Update</option>
                    <option value="remove">Remove</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data to show</td>
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
                placeholder="Enter level"
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

            {/* Visible to user  */}
            <Form.Group controlId="formBasicDescription">
              <Form.Check
                type="checkbox"
                label="Show to user"
                name="is_visible"
                checked={editedData.is_visible}
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

export default ViewFrames