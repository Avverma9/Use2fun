import React, { useEffect, useState } from 'react';

const ViewFrames = () => {
  const [frame,setFrame] = useState(null);
    useEffect(()=>{
      
      const fetchData =async ()=>{
        try{
          const response = await fetch("https://use2fun.onrender.com/admin/frame/getall");
          if(!response.ok){
            throw new Error("network issue");
          }
          const jsonData= await response.json();
          setFrame(jsonData.data);
          console.log("frame", jsonData.data)
        } catch (error){
          console.error("error fetching data" ,error)
        }
      }
      fetchData();
    },[]);

    

  return (
    <div className='viewframe-main'>
        <h3>View Frames</h3>
        <button className='add-frame-btn'>Add Frame</button>


        <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th> Frame Image</th>
            <th>Price</th>
            <th>Level</th>
            <th>Validity</th>
            <th>Action</th>
          </tr>
          {frame&&frame.map((item,index)=>(
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

export default ViewFrames