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
      const modifiedData = jsonData.data.map((item) => ({
        ...item,
        selectedAction: "action",
      }));
      setData(modifiedData);
      console.log("Fetched Data:", modifiedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data, "data")


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

  
  const handleDeleteUser = (userId) => {
    setSelectedUser(userId); // Store the userId to delete
    setShowDeleteModal(true); // Open the delete modal
  };

  const confirmDelete = async () => {
    try {
      const response = await fetch(
        `https://use2fun.onrender.com/admin/remove/adminUser`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: selectedUser }),
        }
      );

      if (response.ok) {
        toast.success('User removed successfully');
        setData((prevData) => prevData.filter((user) => user.userId !== selectedUser));
      } else {
        console.error('Failed to remove user');
        const errorResponse = await response.json();
        console.error('Error Response:', errorResponse);
      }
    } catch (error) {
      console.error('Error removing user:', error);
    } finally {
      setShowDeleteModal(false); // Close the delete modal
    }
  };

  const renderTableRows = () => {
    if (data) {
      const dataArray = Array.isArray(data) ? data : [data];
      return (
        <>
          {dataArray.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {item.userDetails && item.userDetails[0]?.images[0] && (
                  <img className="images" src={item.userDetails[0].images[0]} alt='images' />
                )}
              </td>
              <td>{item.userDetails ? item.userDetails[0]?.name || "N/A" : "N/A"}</td>
              <td>{item.is_ban_unban ? 'Allowed' : 'Not Allowed'}</td>
              <td>{item.kick ? 'Allowed' : 'Not Allowed'}</td>
              <td>{item.agencyban ? 'Allowed' : 'Not Allowed'}</td>
              <td>{item.mute ? 'Allowed' : 'Not Allowed'}</td>
              <td>{item.screenshot ? 'Allowed' : 'Not Allowed'}</td>
              <td>{item.dpapprove ? 'Allowed' : 'Not Allowed'}</td>
              <td>
                <select
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    const updatedData = data.map((d, i) => {
                      if (i === index) {
                        return { ...d, selectedAction: selectedValue };
                      }
                      return d;
                    });
                    setData(updatedData);
                    if (selectedValue === 'update') {
                      setCheckboxes({
                        banUnban: item.is_ban_unban,
                        mute: item.mute,
                        kick: item.kick,
                        screenshot: item.screenshot,
                        agencyBan: item.agencyban,
                        dpApprove: item.dpapprove,
                      });
                      setSelectedUser(item);
                      setShowModal(true);
                    }
                    if (selectedValue === 'remove') {
                      setSelectedUser(item);
                      setShowDeleteModal(true);
                      handleDeleteUser(item.userId);
                    }

                  }}
                  value={item.selectedAction}
                >
                  <option value="action">Action</option>
                  <option value="update">Update</option>
                  <option value="remove">Remove</option>
                </select>
              </td>
            </tr>
          ))}
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
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this user?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewAdmin;
