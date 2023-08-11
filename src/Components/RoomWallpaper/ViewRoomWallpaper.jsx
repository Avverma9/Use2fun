import React, { useEffect, useState } from 'react';
import "./ViewRoomWallpaper.css";
import { useNavigate } from 'react-router-dom';

const ViewRoomWallpaper = () => {
  const [data,setData]=useState(null)
  const navigate= useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://use2fun.onrender.com/admin/wallpaper/getall`);
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

  const handlePost = ()=>{
     navigate('/add-room-wallpaper')
  }

  const renderTableRows = () => {
    if (data) {
      const dataArray = Array.isArray(data) ? data : [data];
      return (
        <>
          {dataArray.map((item, index) => (
      <tr key={index}>
        <td>{index+1}</td>
        <td><img className="images" src={item.image_url} alt='images' /></td>
        <td>{item.price}</td>
        <td>{item.day}</td>
        <td>
          <select>
            <option value="action">Action</option>
            <option value="update">Update</option>
            <option value="remove">Remove</option>
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
    <div className='view-roomwallpaper'>
        <h3>ViewRoomWallpaper</h3>
        <button className='add-app-btn'onClick={handlePost}>Add Room Wallpaper</button>

        <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th> Frame Image</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>


    </div>
  )
}

export default ViewRoomWallpaper