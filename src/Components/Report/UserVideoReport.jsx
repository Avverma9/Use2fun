import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import  styles from './ManageProblemReport.module.css';

const UserVideoReport = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [checkboxes, setCheckboxes] = useState({
//     banUnban: false,
//     mute: false,
//     kick: false,
//     screenshot: false,
//     agencyBan: false,
//     dpApprove: false,
//   });

  const tableData = [
    { id: 1, UserName:"Janem",reportUserName:"xyx",report:"qwe",date:"12/65/44",video:"www.hgfff.com" },

  ];

//   const handleUpdateClick = (user) => {
//     setShowModal(true);
//     setSelectedUser(user);
//     setCheckboxes({
//       banUnban: user.banUnban === 'Allowed',
//       mute: user.mute === 'Allowed',
//       kick: user.kick === 'Allowed',
//       screenshot: user.screenshot === 'Allowed',
//       agencyBan: user.agencyBan === 'Allowed',
//       dpApprove: user.dpApprove === 'Allowed',
//     });
//   };

//   const handleCheckboxChange = (e) => {
//     const checkboxName = e.target.name;
//     const isChecked = e.target.checked;
//     setCheckboaxes((prevCheckboxes) => ({
//       ...prevCheckboxes,
//       [checkboxName]: isChecked,
//     }));
//   };

//   const handleSaveChanges = () => {
//     console.log('Selected User:', selectedUser);
//     console.log('Updated Checkboxes:', checkboxes);
//     setShowModal(false);
//   };

  const renderTableRows = () => {
    return tableData.map((row) => (
      <tr key={row.id}>
        <td>{row.id}</td>
        <td>{row.UserName}</td>
        <td>{row.reportUserName}</td>
        <td>{row.report}</td>
        <td>{row.date}</td>
        <td>{row.video}</td>
        <td>
          <select
            // onChange={() => handleUpdateClick(row)}
            // value={selectedUser === row ? 'update' : 'action'}
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
    <div className={styles.main}>
      <h3>User Video Report</h3>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>User Name</th>
            <th>Report UserName</th>
            <th>Report</th>
            <th>Date/Time</th>
            <th>Video</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>


      {/* <Modal show={showModal} onHide={() => setShowModal(false)}>
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
      </Modal> */}
    </div>
  );
};

export default UserVideoReport;


