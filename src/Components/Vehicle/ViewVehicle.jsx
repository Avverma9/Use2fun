import React, { useEffect, useState } from 'react';
import style from "./ViewVehicle.module.css";
import vehicleImg from "../../assets/icons/vehicle.png"
import { useNavigate } from 'react-router';

const ViewVehicle = () => {
  const navigate = useNavigate()
  const [data, setData] = useState(null);
  const [selectedDay, setSelectedDay] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://use2fun.onrender.com/admin/vehicle/getall");
        if (!response.ok) {
          throw new Error("Fetching issue")
        }
        const responsedata = await response.json();
        setData(responsedata.data);
        setSelectedDay(data.day.toString());
        console.log("answer", responsedata.data);
      } catch (error) {
        console.error("network issue", error);
      }
    }
    fetchData();
  }, [])


  const handleNavigate=()=>{
    navigate('/add-vehicle')
  }






  return (
    <div className='viewframe-main'>
      <h3>View Vehicles</h3>
      <button className='add-frame-btn' onClick={handleNavigate}>Add Vehicle</button>


      <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th> Vehicle Image</th>
            <th>Price</th>
            <th>Level</th>
            <th>Validity</th>
            <th>Action</th>
          </tr>
          {data && data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{<img src={item.img_url} alt='image' />}</td>
              <td>{item.price}</td>
              <td>{item.level}</td>
              <td>{<select className='viewframe-select'>
                <option value="action">1 Day</option>
                <option value="action">2 Day</option>
                <option value="action">3 Day</option>
                <option value="action">4 Day</option>
                <option value="action">5 Day</option>
                <option value="action">6 Day</option>
                <option value="action">7 Day</option>
              </select>}</td>
              <td>
          <select>
            <option value="action">Action</option>
            <option value="update">Update</option>
            <option value="remove">Remove</option>
          </select>
        </td>
             
            </tr>
          ))}

        </thead>

      </table>


    </div>
  )
}

export default ViewVehicle