import React, { useEffect, useState } from 'react';
// import './ViewVehicle.module.css';
import { useNavigate } from 'react-router-dom';

const ViewVehicle = () => {
  const navigate = useNavigate();
  const [vehicle,setVehicle] = useState(null);
    useEffect(()=>{
      
      const fetchData =async ()=>{
        try{
          const response = await fetch("https://use2fun.onrender.com/admin/vehicle/getall");
          if(!response.ok){
            throw new Error("network issue");
          }
          const jsonData= await response.json();
          setVehicle(jsonData.data);
          console.log("vehicle", jsonData.data)
        } catch (error){
          console.error("error fetching data" ,error)
        }
      }
      fetchData();
    },[]);

     const navigatetoaddvehicle=()=>{
        navigate('/add-vehicle')
}
    

  return (
    <div className='viewframe-main'>
        <h3>View Vehicle</h3>
        <button className='add-frame-btn' onClick={navigatetoaddvehicle}>Add Vehicle</button>


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
          {vehicle&&vehicle.map((item,index)=>(
            <tr key={index}>
            <td>{index+1}</td>
            <td><img src={item.img_url} alt='image'/></td>
            <td>{item.price}</td>
            <td>{item.level}</td>
            <td>{item.day}</td>
            <td>{<select className='viewframe-select'>
                <option value="action">Action</option>
                </select>}</td>
            

            </tr>
          ))
          
          
          }
        </thead>
    
      </table>


    </div>
  )
}

export default ViewVehicle;
