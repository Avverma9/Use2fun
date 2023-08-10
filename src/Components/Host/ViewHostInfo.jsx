import React from 'react';
import styles from "./ViewHostInfo.module.css"

const ViewHostInfo = () => {
  const data = {
    agencyCode: 123,
    userName: "abc",
    name: "xyz",
    status: "approved",
    email: "abc@gmail.com",
    created: "12/09/2023",
  };

  return (
    <div>
      <h3>View Host Information</h3>

      <div className="main">
        <table>
          <thead>
            <tr>
              <th>Agency Code</th>
              <td>{data.agencyCode}</td>
            </tr>
            <tr>
              <th>User Name</th>
              <td>{data.userName}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{data.status}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{data.email}</td>
            </tr>
            <tr>
              <th>Created</th>
              <td>{data.created}</td>
            </tr>
          </thead>
        </table>
      </div>

      <div className={styles.box} >
        <label>Live(Ban/Unban)</label>
        <select name="" id="">
            <option value="banuser">Ban users</option>
            <option value="unabuser">Unban users</option>
        </select>

        <label>Host Request</label>
        <select name="" id="">
            <option value="banuser">Select User Status</option>
        </select>
      </div>
    </div>
  );
};

export default ViewHostInfo;
