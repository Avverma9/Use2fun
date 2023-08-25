import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './ViewVip.css';


function ViewVip() {
  const navigate = useNavigate();
  const [vipdata,setVipdata]=useState(null);
  


  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response = await fetch("https://use2fun.onrender.com/admin/vip/getall");
        if(!response.ok){
          throw new Error("An error occupied");
        };
        const jsonData=await response.json()
        setVipdata(jsonData.data);
        console.log("result" ,jsonData.data);
      }catch (error) {
        console.error("Error fetching data:", error);
    }
  }
  fetchData();},[])

 const handleNavigate=()=>{
  navigate('/add-vip')
 }



  return (
    <div id="vip_main">
      <div className="vip_header">
        <h3>View Vip</h3>
        <button className="add-vip_btn" onClick={handleNavigate}>Add vip</button>
      </div>

      <table className="table">
      <thead>
        <tr>
          <th >Sr.</th>
          <th >Vip Image</th>
          <th >
            Price
          </th>
          <th >Level</th>
          <th>Validity</th>
          <th >Action</th>
        </tr>
        
        
        
        {vipdata&& vipdata.map((item,index)=>(
        <tr key={index} className="row2">
          <td >{index+1}</td>
          <td >
            <img src={item.images[0]} alt="image" />
          </td>
          <td >{item.price}</td>
          <td >{item.level}</td>
          <td>{item.day}(in days)</td>
          <select className='viewframe-select' id="">Action
          <option value="action">Action</option>
          </select>
          
        </tr>
      ))}
      </thead>
      </table>
      
    </div>
  );
}

export default ViewVip;