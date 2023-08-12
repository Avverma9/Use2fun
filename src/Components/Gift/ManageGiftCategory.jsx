import React, { useEffect, useState } from "react";
import './AddLiveGifts.css';


function ManageGiftcategory() {
  const [giftc,setGiftc] = useState(null);
  const [status,setStatus] = useState(null);
  useEffect(()=>{
    const fetchData =async()=>{
      try{
      const responsedata= await fetch("https://use2fun.onrender.com/admin/giftCategory/getall");
      if (!responsedata.ok){
        throw new Error("Network issue");
      }
      const response =await responsedata.json();
      setGiftc(response.data);
      setStatus(response.status);
      console.log (response.data);
    } catch (error){
      console.error("fetching problem",error)
    }
    }
    fetchData();
  },[]);
  return (
    <div id="gift_main">
      <div className="gift_header">
        <h3>Manage Gift Category</h3>
        <button className="gift_btn">Add Gift Category</button>
      </div>

      <table className="gift_table">
        <tr>
          <th>Sr.</th>
          <th> Title</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {giftc && giftc.map((item,index)=>(
          <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{status}</td>
          </tr>

        ))}
       
      </table>
    </div>
  );
}

export default ManageGiftcategory;