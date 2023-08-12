import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <form onSubmit={handleSubmit}>
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
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExtraSeat;
