import React from "react";
import { useState,useEffect } from "react";
import './ViewBanner.css';

function ViewBanner() {
  const [banner,setBanner] = useState(null);
  useEffect(()=>{
    const fetchData =async()=>{
      try{
      const responsedata= await fetch("https://use2fun.onrender.com/admin/banner/getall");
      if (!responsedata.ok){
        throw new Error("Network issue");
      }
      const response =await responsedata.json();
      setBanner(response.data);
      
      console.log (response.data);
    } catch (error){
      console.error("fetching problem",error)
    }
    }
    fetchData();
  },[]);
  return (
    <div className="main">
      <h3>View Banner</h3>
      <table>
        <tr>
          <th>Sr.</th>
          <th >Banner Image</th>
          <th width="10px">HyperLink</th>
          <th>Action</th>
        </tr>
        {banner && banner.map((item,index)=>(
          <tr>
            <td>{index+1}</td>
            <td><img src={item.img_url} alt='image'/></td>
            <td>{item.link}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ViewBanner;