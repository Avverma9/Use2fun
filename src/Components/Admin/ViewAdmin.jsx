import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ViewAdmin.css';

const ViewAdmin = () => {
  const [data, setData] = useState(null)
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState("action");
  const [checkboxes, setCheckboxes] = useState({
    banUnban: false,
    mute: false,
    kick: false,
    screenshot: false,
    agencyBan: false,
    dpApprove: false,
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`https://use2fun.onrender.com/admin/adminUser/getall`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData.data);
      console.log("Fetched Data:", jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  console.log(data, "data")

  const handleUpdateClick = (user) => {
    setShowModal(true);
    setSelectedUser(user);
    setCheckboxes({
      banUnban: user.is_ban_unban,
      mute: user.mute,
      kick: user.kick,
      screenshot: user.screenshot,
      agencyBan: user.agencyban,
      dpApprove: user.dpapprove,
    });
  };

  const handleCheckboxChange = (e) => {
    const checkboxName = e.target.name;
    const isChecked = e.target.checked;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: isChecked,
    }));
  };

  const handleSaveChanges = async () => {
    console.log('Selected User:', selectedUser);
    console.log('Updated Checkboxes:', checkboxes);
    setShowModal(false);
  
    try {
      if (selectedUser) {
        const response = await fetch(`https://use2fun.onrender.com/admin/adminUser/update/${selectedUser.userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            is_ban_unban: checkboxes.banUnban,
            mute: checkboxes.mute,
            kick: checkboxes.kick,
            screenshot: checkboxes.screenshot,
            agencyban: checkboxes.agencyBan,
            dpapprove: checkboxes.dpApprove,
          }),
        });
  
        if (response.ok) {
          toast.success('User permissions updated successfully');
          fetchData()
          setSelectedAction("action");
        } else {
          console.error('Failed to update user permissions');
        }
      }
    } catch (error) {
      console.error('Error updating user permissions:', error);
    }
  };

  const handleDeleteUser = async () => {
    setShowDeleteModal(true);
    try {
      if (selectedUser) {
        const response = await fetch(`https://use2fun.onrender.com/admin/remove/adminUser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: selectedUser.id }),
        });

        if (response.ok) {
          toast.success('User removed successfully');
          setData((prevData) => prevData.filter((user) => user.id !== selectedUser.id));
        } else {
          console.error('Failed to remove user');
        }
      }
    } catch (error) {
      console.error('Error removing user:', error);
    }
  };

  const renderTableRows = () => {
    if (data) {
      const dataArray = Array.isArray(data) ? data : [data];
      return (
        <>
          {dataArray.map((item, index) => {
            console.log("Item:", item);
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><img className="images" src={item.image_url} alt='images' /></td>
                <td>{item.name || "N/A"}</td>
                <td>{item.is_ban_unban ? 'Allowed' : 'Not Allowed'}</td>
                <td>{item.kick ? 'Allowed' : 'Not Allowed'}</td>
                <td>{item.agencyban ? 'Allowed' : 'Not Allowed'}</td>
                <td>{item.mute ? 'Allowed' : 'Not Allowed'}</td>
                <td>{item.screenshot ? 'Allowed' : 'Not Allowed'}</td>
                <td>{item.dpapprove ? 'Allowed' : 'Not Allowed'}</td>
                <td>
                  <select onChange={(e) => {
                    const selectedValue = e.target.value;
                    setSelectedAction(selectedValue);
                    if (selectedValue === 'update') {
                      handleUpdateClick(item);
                    }
                    if (selectedValue === 'remove') {
                      handleDeleteUser(item);
                    }
                  }}
                  value={selectedAction}
                  >
                    <option value="action">Action</option>
                    <option value="update">Update</option>
                    <option value="remove">Remove</option>
                  </select>
                </td>
              </tr>
            );
          })}
        </>
      );
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
      <h3>View Admin</h3>
      <div className="filter">
        <label>Search</label>
        <input type="text" />

        <label>Start Date</label>
        <input type="date" />

        <label>End Date</label>
        <input type="date" />

        <button className='view-admin-search'>Search</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Ban/Unban</th>
            <th>Kick</th>
            <th>Agency Ban</th>
            <th>Mute</th>
            <th>Screenshot/Screenrecording</th>
            <th>DP Approve</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>

      {/* Update Modal  */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="banUnban"
                checked={checkboxes.banUnban}
                onChange={handleCheckboxChange}
              />
              Ban/Unban
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="mute"
                checked={checkboxes.mute}
                onChange={handleCheckboxChange}
              />
              Mute
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="kick"
                checked={checkboxes.kick}
                onChange={handleCheckboxChange}
              />
              Kick
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="screenshot"
                checked={checkboxes.screenshot}
                onChange={handleCheckboxChange}
              />
              ScreentShot & Recording
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agencyBan"
                checked={checkboxes.agencyBan}
                onChange={handleCheckboxChange}
              />
              Agency Ban
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="dpApprove"
                checked={checkboxes.dpApprove}
                onChange={handleCheckboxChange}
              />
              DP Approve
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm User Removal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this user?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteUser}>
            Confirm Removal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewAdmin;
