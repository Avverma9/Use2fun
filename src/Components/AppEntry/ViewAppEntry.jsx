import React, { useEffect, useState } from 'react';
import "./ViewAppEntry.css"

const ViewAppEntry = () => {
  const[data,setData] =useState(null)
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response = await fetch("https://use2fun.onrender.com/admin/appEntry/getall");
        if(!response.ok){
          throw new Error("Network problem");
        };
        const jsonData=await response.json();
        setData(jsonData.data)
        console.log("Fetched Data:", jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
fetchData()
  },[])

  return (
    <div className='viewappentry'>
      <h2>ViewAppEntry</h2>
      <table>
        <thead>
          <tr className='viewappentry-row1'>
            <th>Sr.</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data&& data.map((item, index) => (
            <tr key={index} className='viewappentry-row2'>
              <td>{index+1}</td>
              <td>
                <img src={item.img_url} alt='image' />
              </td>
              <td>
                <select className="selectbar">
                  <option value="action">Action</option>
                  <option value="update">Update</option>
                  <option value="remove">Remove</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAppEntry;