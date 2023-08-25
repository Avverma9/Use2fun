import React, { useState, useEffect } from 'react'
import style from "./PendingHost.module.css"
import { useNavigate } from 'react-router-dom'

const ApprovedHost = () => {

  const [data, setData] = useState(null)
  const navigate = useNavigate()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://use2fun.onrender.com/host/getApproved");
        const jsonData = await response.json();
        console.log(jsonData.data)
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data)

  const handleNavigate = () => {
    navigate('/view-host-info')
  }

  const renderTableRows = () => {
    if (data) {
      const dataArray = Array.isArray(data) ? data : [data];
      return (
        <>
          {dataArray.map((item, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.userId || "N/A"}</td>
              <td>{item.name || "N/A"}</td>
              <td>{item.mobile || "N/A"}</td>
              <td>{item.agency_code || "N/A"}</td>
              <td>{item.status || "N/A"}</td>
              <td>
                <select onChange={(e) => e.target.value === 'view' && handleNavigate()}>
                  <option value="">Action</option>
                  <option value="view">View</option>
                  {/* <option value="accept">Accept</option>
                  <option value="reject">Reject</option> */}
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
    <div className={style.main}>
      <h3>Manage Approved Host Request</h3>
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

export default ApprovedHost