import React, { useEffect, useState } from "react";
import './managegift.css';

function ManageGift() {
  const [viewgift,setViewgift] = useState(null)
  const [status,setStatus] = useState(null);
  useEffect(()=>{
    const fetchData= async()=>{
      try{ const response = await fetch("https://use2fun.onrender.com/admin/gift/getall");
      if (!response.ok){
        throw new Error("network issue")
      }
      const jsonData=  await response.json();
      setViewgift(jsonData.data);
      setStatus(jsonData.status)
      console.log("gifts",jsonData.data)
      console.log("status",jsonData.status)

    } catch (error){
      console.error("error fetch",error)
    }
  }
  fetchData();
  },[])
  return (
    <div>
      <div id="gift_main">
        <div className="gift_header">
          <h3>Manage Gift </h3>
          <button className="gift_btn">Add Gift Category</button>
        </div>

        <table className="gift_table">
          <tr>
            <th>Sr.</th>
            <th> Title</th>
            <th>Image</th>
            <th>Thumbnail</th>
            <th>Coin</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        {viewgift&&viewgift.map((item,index)=>(
          <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td><img src={item.img_url} alt="image" /></td>
            <td>{item.category_name}</td>
            <td>{item.coin}</td>
            <td>{status}</td>
          </tr>
        ))}
        </table>
      </div>
    </div>
  );
}

export default ManageGift;