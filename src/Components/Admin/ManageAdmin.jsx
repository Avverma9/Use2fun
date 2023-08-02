import React from 'react'
import style from "./ManageAdmin.module.css"

const ManageAdmin = () => {

    const tableData = [
        { id: 1, agencyName: 'Agency 1', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", Name: 'User 1',banUnban:"Allowed", kick: 'Allowed', agencyBan: 'Allowed', mute:"Allowed", screenshot:"Allowed", dpApprove:"Allowed" },
        { id: 2, agencyName: 'Agency 1', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", Name: 'User 1',banUnban:"Allowed", kick: 'Allowed', agencyBan: 'Allowed', mute:"Allowed", screenshot:"Allowed", dpApprove:"Allowed" },
      ];
    
      const renderTableRows = () => {
        return tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{<img className={style.images} src={row.image} alt='images'/>}</td>
            <td>{row.Name}</td>
            <td>{row.banUnban}</td>
            <td>{row.kick}</td>
            <td>{row.agencyBan}</td>
            <td>{row.mute}</td>
            <td>{row.screenshot}</td>
            <td>{row.dpApprove}</td>
            <td>{<select>
                <option value="action">Action</option>
                </select>}</td>
          </tr>
        ));
      };


  return (
    <div className={style.main}>
        <h3>Manage Admin</h3>
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

    </div>
  )
}

export default ManageAdmin