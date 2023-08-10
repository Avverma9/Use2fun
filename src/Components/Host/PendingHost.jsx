import React, { useEffect, useState } from 'react'
import style from "./PendingHost.module.css"
import { useNavigate } from 'react-router-dom'

const PendingHost = () => {
  const [data,setData]=useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://use2fun.onrender.com/host/getPending");
        const jsonData = await response.json();
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


  //Accept Request
  const handleStatusChange = async (itemId, newStatus) => {
    try {
      const response = await fetch("https://use2fun.onrender.com/admin/host/changeStatus", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: itemId,
          status: newStatus
        })
      });

      if (response.ok) {
         console.log(itemId,"Data Changed")
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error("Error changing status:", error);
    }
  }


 
    
  const renderTableRows = () => {
    if (data) {
      const dataArray = Array.isArray(data) ? data : [data];
  
      return (
        <>
          {dataArray.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.userId.name}</td>
              <td>{item.userId.name}</td>
              <td>{item.userId.email || "testing@gmail.com"}</td>
              <td>{item.userId.mobile}</td>
              <td>{item.agency_code}</td>
              <td>{item.status}</td>
              <td>
              <select onChange={(e) => {
                  const selectedValue = e.target.value;
                  if(selectedValue==='view'){
                    handleNavigate()
                  }
                  if (selectedValue === 'accept') {
                    handleStatusChange(item._id, 'Approved');
                  }
                }}>
                  <option value="">Action</option>
                  <option value="view">View</option>
                  <option value="accept">Accept</option>
                  <option value="reject">Reject</option>
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