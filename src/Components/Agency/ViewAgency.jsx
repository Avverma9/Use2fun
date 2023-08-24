import React, { useState,useEffect } from 'react';
import  "./ViewAgency.css";

const ViewAgency = () => {
  const [data,setData]=useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://use2fun.onrender.com/admin/agency/getall`);
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
    
  
    fetchData();
  }, []);

  console.log(data, "data")
    
  
  const renderTableRows = () => {
    if (data) {
      const dataArray = Array.isArray(data) ? data : [data];
      return (
        <>
          {dataArray.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <img className="images" src={item.images[0]} alt="images" />
              </td>
              <td>{item.name || "N/A"}</td>
              <td>{item.userId || "N/A"}</td>
              <td>{item.code || "N/A"}</td>
              <td>{item.email}</td>
              <td>
                <select>
                  <option value="action">Action</option>
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
        <h3>View Agency</h3>
        <div className="filter">
           <label>Search</label>
           <input type="text" />

           <label>Start Date</label>
           <input type="date" />

           <label>End Date</label>
           <input type="date" />

           <button className='agency-search-button'>Search</button>
        </div>

        {/* ----------------------table---------------------- */}
        <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>AgencyName</th>
            <th>UserId</th>
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