import React, { useState } from "react";
import axios from "axios";
import './Extraseat.css';
import {FiUpload} from 'react-icons/fi';

const ExtraSeat = () => {
  const [day, setDay] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const formData = new FormData(); 
    formData.append("day", day);
    formData.append("price", price);
    formData.append("images", images);

    try {
      const response = await axios.post(
        "https://use2fun.onrender.com/admin/extraSeat/add",
        formData
      );
      if (response.data) {
        alert("Data has been received");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageUpload = (e) => {
    setImages(e.target.files[0]); 
  };

  return (
    <div className="seat-container">
    <div className="text-cont">
      <h1>Extra Seat</h1>
      <button className="view">View</button>
    </div>
    <div className="img"><img src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-25/seat-2.png" alt="img"/></div>
      <form className="seat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={day}
          placeholder="Validity day"
          onChange={(e) => setDay(e.target.value)}
        />
        <input
          type="text"
          value={price}
          placeholder="Enter price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label className="fileupload-" htmlFor="fileupload"><FiUpload/>File Upload</label>
        <input
        id="fileupload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <div className="btn-cont7">
        <button className="disable" type="disable">Disable</button>
        <button className="submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ExtraSeat;
