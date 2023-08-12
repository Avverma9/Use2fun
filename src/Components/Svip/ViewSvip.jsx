import React, { useEffect, useState } from 'react';
import './ViewSvip.css';
import { useNavigate } from 'react-router-dom';

function ViewSvip() {
  const navigate = useNavigate();
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
  const navigatetosvip=()=>{
    navigate('/add-svip');
  }
  return (
    <div>
        <div id="vip_main">
      <div className="vip_header">
        <h3>View Svip</h3>
        <button className="vip_btn" onClick={navigatetosvip}>Add Svip</button>
      </div>

      <table id="vip_table">
        <tr>
          <th className="priceth1">Sr.</th>
          <th className="priceth1">Vip Image</th>
          <th className="priceth1" width="10px">
            Price
          </th>
          <th className="priceth1">Level</th>
          <th className="priceth1">Validity</th>
          <th className="priceth1">Action</th>
        </tr>
        {viewsvip&&viewsvip.map((item,index)=>(
          <tr>
<<<<<<< HEAD
            <td className='priceth1'>{index+1}</td>
            <td className='priceth1'><img src='{item.img_url}'/></td>
            <td className='priceth1'>{item.price}</td>
            <td className='priceth1'>{item.level}</td>
            <td className='priceth1'>{item.day}<span>days</span></td>
            <td>{<select className='viewsvip-select'>
                <option value="action">Action</option>
                </select>}</td>
=======
            <td className='priceth'>{index+1}</td>
            <td className='priceth'><img src={item.images[0]}/></td>
            <td className='priceth'>{item.price}</td>
            <td className='priceth'>{item.level}</td>
            <td className='priceth'>{item.day}<span>days</span></td>
>>>>>>> origin/Abdul
            
          </tr>

        ))}
       
      </table>
    </div>
    </div>
  )
}

export default ViewSvip