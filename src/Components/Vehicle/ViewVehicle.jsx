import React, { useEffect,useState } from 'react';
import style from "./ViewVehicle.module.css";
import vehicleImg from "../../assets/icons/vehicle.png"

const ViewFrames = () => {
  const [viewvehicle,setViewvehicle]=useState(null);
  useEffect(()=>{
    const fetchData=async()=>{
       try{
        const response = await fetch("https://use2fun.onrender.com/admin/vehicle/getall");
        if (!response.ok){
          throw new Error("Fetching issue")
        }
        const responsedata = await response.json();
        setViewvehicle(responsedata.data);
        console.log("answer",responsedata.data);
       } catch (error) {
        console.error("network issue",error);
       }
    }
    fetchData();
  },[])

    

    

     

  return (
    <div className='viewframe-main'>
        <h3>View Vehicles</h3>
        <button className='add-frame-btn'>Add Vehicle</button>


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
           {viewvehicle&&viewvehicle.map((item,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td><img src={item.img_url} alt='image'/></td>
              <td>{item.price}</td>
              <td>{item.level}</td>
              <td>{item.day}day</td>
              
            </tr>
           ))}
          
        </thead>
        
      </table>


    </div>
  )
}

export default ViewFrames