import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import style from "./ViewFrames.css";
=======
import  "./ViewFrames.css";
>>>>>>> origin/Abdul
import { useNavigate } from 'react-router-dom';

const ViewFrames = () => {
  const navigate = useNavigate();
  const [frame,setFrame] = useState(null);
  const navigate = useNavigate()
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

<<<<<<< HEAD
    const navigatetoaddframe=()=>{
      navigate('/add-frames');
    }

=======

    const handleNavigate=()=>{
      navigate('/add-frames')
    }
>>>>>>> origin/Abdul
    

  return (
    <div className='viewframe-main'>
        <h3>View Frames</h3>
<<<<<<< HEAD
        <button className='add-frame-btn' onClick={navigatetoaddframe}>Add Frame</button>
=======
        <button className='add-frame-btn' onClick={handleNavigate}>Add Frame</button>
>>>>>>> origin/Abdul


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
            <td><img src={item.images[0]} alt='image'/></td>
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

export default ViewFrames