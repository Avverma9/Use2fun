import React, { useEffect, useState } from 'react';
import './ViewSvip.css';

function ViewSvip() {
  const [viewsvip,setViewsvip] = useState(null);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch("https://use2fun.onrender.com/admin/svip/getall")
        if (!response.ok){
          throw new Error("Network problem");
        }
        const jsonData=await response.json();
        setViewsvip(jsonData.data);
        console.log(jsonData.data ,"svip")

      }catch (error){
        console.error("fetching-issue",error)
      }

    }
    fetchData();
  },[])
  return (
    <div>
        <div id="vip_main">
      <div className="vip_header">
        <h3>View Svip</h3>
        <button className="vip_btn">Add Svip</button>
      </div>

      <table id="vip_table">
        <tr>
          <th className="priceth">Sr.</th>
          <th className="priceth">Vip Image</th>
          <th className="priceth" width="10px">
            Price
          </th>
          <th className="priceth">Level</th>
          <th className="priceth">Validity</th>
          <th className="priceth">Action</th>
        </tr>
        {viewsvip&&viewsvip.map((item,index)=>(
          <tr>
            <td className='priceth'>{index+1}</td>
            <td className='priceth'><img src={item.images[0]}/></td>
            <td className='priceth'>{item.price}</td>
            <td className='priceth'>{item.level}</td>
            <td className='priceth'>{item.day}<span>days</span></td>
            
          </tr>

        ))}
       
      </table>
    </div>
    </div>
  )
}

export default ViewSvip