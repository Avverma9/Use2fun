import React from 'react'
import style from "./ViewAgency.module.css"

const ViewAgency = () => {

    const tableData = [
        { id: 1, agencyName: 'Agency 1', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", userName: 'User 1', agencyCode: 'Code 1', email: 'testing1@example.com' },
        { id: 2, agencyName: 'Agency 2', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", userName: 'User 2', agencyCode: 'Code 2', email: 'testing2@example.com' },
      ];
    
      const renderTableRows = () => {
        return tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{<img className={style.images} src={row.image} alt='images'/>}</td>
            <td>{row.agencyName}</td>
            <td>{row.userName}</td>
            <td>{row.agencyCode}</td>
            <td>{row.email}</td>
            <td>{<select>
                <option value="action">Action</option>
                </select>}</td>
          </tr>
        ));
      };


  return (
    <div className={style.main}>
        <h3>View Agency</h3>
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
            <th>AgencyName</th>
            <th>UserName</th>
            <th>AgencyCode</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>

    </div>
  )
}

export default ViewAgency