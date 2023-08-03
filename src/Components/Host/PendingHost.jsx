import React from 'react'
import style from "./PendingHost.module.css"

const PendingHost = () => {

    const tableData = [
        { id: 1, userName: 'User 1', name: 'testing1', email: 'testing1@example.com', phone:"12345", agencyCode:"122",status:"Pending" },
        { id: 2, userName: 'User 2', name: 'testing1', email: 'testing1@example.com', phone:"12345", agencyCode:"122",status:"Pending" },
        { id: 3, userName: 'User 3', name: 'testing1', email: 'testing1@example.com', phone:"12345", agencyCode:"122",status:"Pending" },
        { id: 4, userName: 'User 4', name: 'testing1', email: 'testing1@example.com', phone:"12345", agencyCode:"122",status:"Pending" },
      ];
    
      const renderTableRows = () => {
        return tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.userName}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.phone}</td>
            <td>{row.agencyCode}</td>
            <td>{row.status}</td>
            <td>{<select>
                <option value="action">Action</option>
                </select>}</td>
          </tr>
        ));
      };


  return (
    <div className={style.main}>
        <h3>Manage Pending Host Request</h3>
        <div className={style.filter}>
           <label>Search</label>
           <input type="text" />

           <label>Start Date</label>
           <input type="date" />

           <label>End Date</label>
           <input type="date" />

           <button>Search</button>
        </div>

        {/* ----------------------table---------------------- */}
        <table className={style.table}>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Agency Code</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>

    </div>
  )
}

export default PendingHost