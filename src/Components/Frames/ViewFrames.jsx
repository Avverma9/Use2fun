import React, { useEffect, useState } from 'react';
import styles from "./ViewFrames.module.css"
import { useNavigate } from 'react-router-dom';

const ViewFrames = () => {
  const navigate = useNavigate();
  const [frame, setFrame] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("https://use2fun.onrender.com/admin/frame/getall");
        if (!response.ok) {
          throw new Error("network issue");
        }
        const jsonData = await response.json();
        setFrame(jsonData.data);
        // console.log("frame", jsonData.data)
      } catch (error) {
        // console.error("error fetching data" ,error)
      }
    }
    fetchData();
  }, []);


  const handleNavigate = () => {
    navigate('/add-frames')
  }


  return (
    <div className={styles.viewframemain}>
      <h3>View Frames</h3>
      <button className={styles.addframebtn} onClick={handleNavigate}>Add Frame</button>


      <table >
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Frame Image</th>
            <th>Price</th>
            <th>Level</th>
            <th>Validity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {frame && frame.length > 0 ? (
            frame.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img className={styles.images} src={item.images[0]} alt="image" />
                </td>
                <td>{item.price}</td>
                <td>{item.level}</td>
                <td>{item.day}</td>
                <td>
                  <select className={styles.viewframeselect}>
                    <option value="action">Action</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data to show</td>
            </tr>
          )}
        </tbody>
      </table>


    </div>
  )
}

export default ViewFrames