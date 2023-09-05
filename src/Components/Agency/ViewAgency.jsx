import React, { useState, useEffect } from 'react';
import "./ViewAgency.css";
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewAgency = () => {
  const [data, setData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const navigate = useNavigate();

  const [editedData, setEditedData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const [selectedActions, setSelectedActions] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://use2fun.onrender.com/admin/agency/getall`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData.data);
      console.log("Fetched Data:", jsonData.data);
      setSelectedActions(Array(jsonData.data.length).fill('action'));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Dropdown change
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
  };

  // Delete
  const handleConfirmDelete = async () => {
    if (selectedItem !== null) {
      const selectedItemData = data[selectedItem];
      console.log(selectedItemData._id, "Selected Id");

      try {
        const response = await fetch(`https://use2fun.onrender.com/admin/agency/delete/${selectedItemData._id}`, {
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
  };

  // Update
  const handleUpdateSubmit = async () => {
    if (selectedItem !== null) {
      try {
        const response = await fetch(`https://use2fun.onrender.com/admin/agency/update/${editedData._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedData),
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
    }
  };

  // Edit Modal
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedItem(null);
    
    if (selectedItem !== null) {
      const updatedActions = [...selectedActions];
      updatedActions[selectedItem] = 'action';
      setSelectedActions(updatedActions);
    }
  };

  // Delete Modal
  const handleCloseRemoveModal = () => {
    setShowRemoveModal(false);
    setSelectedItem(null);

    if (selectedItem !== null) {
      const updatedActions = [...selectedActions];
      updatedActions[selectedItem] = 'action';
      setSelectedActions(updatedActions);
    }
  };

  console.log(data, "data");

  const renderTableRows = () => {
    if (data) {
      return data.map((item, index) => (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>
            <img className="images" src={item.images[0]} alt="images" />
          </td>
          <td>{item.name || "N/A"}</td>
          <td>{item.userId || "N/A"}</td>
          <td>{item.code || "N/A"}</td>
          <td>{item.email}</td>
          <td>
            <select className="selectbar" value={selectedActions[index]} onChange={(e) => handleDropdownChange(index, e.target.value)}>
              <option value="action">Action</option>
              <option value="update">Update</option>
              <option value="remove">Remove</option>
            </select>
          </td>
        </tr>
      ));
    } else {
      return (
        <tr>
          <td colSpan="8">
            <h2>No data available</h2>
          </td>
        </tr>
      );
    }
  };

  return (
    <div className="main">
      <h3>View Agency</h3>
      <div className="filter">
        <label>Search</label>
        <input type="text" />

        <label>Start Date</label>
        <input type="date" />

        <label>End Date</label>
        <input type="date" />

        <button className='agency-search-button'>Search</button>
      </div>

      {/* ----------------------table---------------------- */}
      <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>AgencyName</th>
            <th>UserId</th>
            <th>AgencyCode</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>

      {/* //Delete Modal */}
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

      {/* Update Modal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Name */}
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={editedData.name}
                onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
              />
            </Form.Group>
            {/* email */}
            <Form.Group controlId="formBasicDescription">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={editedData.email}
                onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
              />
            </Form.Group>
            {/* Mobile */}
            <Form.Group controlId="formBasicDescription">
              <Form.Label>mobile</Form.Label>
              <Form.Control
                type="number"
                placeholder="mobile"
                value={editedData.mobile}
                onChange={(e) => setEditedData({ ...editedData, mobile: e.target.value })}
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

export default ViewAgency;
