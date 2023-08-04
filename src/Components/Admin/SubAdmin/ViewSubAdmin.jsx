import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ViewSubAdmin.css';

const ViewSubAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [checkboxes, setCheckboxes] = useState({
    banUnban: false,
    mute: false,
    kick: false,
    screenshot: false,
    agencyBan: false,
    dpApprove: false,
  });

  const tableData = [
    { id: 1, agencyName: 'Agency 1', image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", Name: 'User 1', banUnban: "Allowed", kick: 'Allowed', agencyBan: 'Allowed', mute: "Allowed", screenshot: "Allowed", dpApprove: "Allowed" },
    { id: 2, agencyName: 'Agency 1', image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", Name: 'User 1', banUnban: "Allowed", kick: 'Allowed', agencyBan: 'Allowed', mute: "Allowed", screenshot: "Allowed", dpApprove: "Allowed" },
  ];

  const handleUpdateClick = (user) => {
    setShowModal(true);
    setSelectedUser(user);
    setCheckboxes({
      banUnban: user.banUnban === 'Allowed',
      mute: user.mute === 'Allowed',
      kick: user.kick === 'Allowed',
      screenshot: user.screenshot === 'Allowed',
      agencyBan: user.agencyBan === 'Allowed',
      dpApprove: user.dpApprove === 'Allowed',
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

  const handleSaveChanges = () => {
    console.log('Selected User:', selectedUser);
    console.log('Updated Checkboxes:', checkboxes);
    setShowModal(false);
  };

  const renderTableRows = () => {
    return tableData.map((row) => (
      <tr key={row.id}>
        <td>{row.id}</td>
        <td><img className="images" src={row.image} alt='images' /></td>
        <td>{row.Name}</td>
        <td>{row.banUnban}</td>
        <td>{row.kick}</td>
        <td>{row.agencyBan}</td>
        <td>{row.mute}</td>
        <td>{row.screenshot}</td>
        <td>{row.dpApprove}</td>
        <td>
          <select className='select-viewsubadmin'
            onChange={() => handleUpdateClick(row)}
            value={selectedUser === row ? 'update' : 'action'}
          >
            <option value="action">Action</option>
            <option value="update">Update</option>
            <option value="remove">Remove</option>
          </select>
        </td>
      </tr>
    ));
  };

  return (
    <div className="main">
      <h3>Manage SubAdmin</h3>
      <div className="filter">
        <label>Search</label>
        <input type="text" />

        <label>Start Date</label>
        <input type="date" />

        <label>End Date</label>
        <input type="date" />

        <button className='search-button'>Search</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>Name</th>
            <th>UniqueId</th>
            <th>Email</th>
            <th> Mobile</th>
            <th>Total Coins</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>


      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            <input
              type="checkbox"
              name="banUnban"
              checked={checkboxes.banUnban}
              onChange={handleCheckboxChange}
            />
            Ban/Unban
          </label>
          <label>
            <input
              type="checkbox"
              name="mute"
              checked={checkboxes.mute}
              onChange={handleCheckboxChange}
            />
            Mute
          </label>
          <label>
            <input
              type="checkbox"
              name="kick"
              checked={checkboxes.kick}
              onChange={handleCheckboxChange}
            />
            Kick
          </label>
          <label>
            <input
              type="checkbox"
              name="screenshot"
              checked={checkboxes.screenshot}
              onChange={handleCheckboxChange}
            />
            ScreentShot & Recording
          </label>
          <label>
            <input
              type="checkbox"
              name="agencyBan"
              checked={checkboxes.agencyBan}
              onChange={handleCheckboxChange}
            />
            Agency Ban
          </label>
          <label>
            <input
              type="checkbox"
              name="dpApprove"
              checked={checkboxes.dpApprove}
              onChange={handleCheckboxChange}
            />
            DP Approve
          </label>
          
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
    </div>
  );
};

export default ViewSubAdmin;
