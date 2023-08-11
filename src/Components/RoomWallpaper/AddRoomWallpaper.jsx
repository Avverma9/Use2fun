import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import "./AddRoomWallpaper.css";



const AddRoomWallpaper = () => {
  const [formData, setFormData] = useState({
    day: '',
    price: '',
    wallpaper: null  // Use null for file input
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.price < 0 || formData.day < 0) {
      // toast.error('Price and validity cannot be negative');
      return;
    }

    const formDataToSend = new FormData();  // Create a new FormData instance
    formDataToSend.append('day', formData.day);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('wallpaper', formData.wallpaper);

    try {
      const response = await fetch('https://use2fun.onrender.com/admin/wallpaper/add', {
        method: 'POST',
        body: formDataToSend,  // Use the FormData instance
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        // toast.success('Data submitted successfully');
        setFormData({
          day: '',
          price: '',
          wallpaper: null,
        });
      } else {
        // toast.error('Error submitting data');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      // toast.error('Error submitting data');
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, wallpaper: e.target.files[0] });  // Update wallpaper with the selected file
  };

  return (
    <div className='addroom'>
      <h2>Room Wallpaper</h2>
      
      <form className="container-addroom" onSubmit={handleSubmit}>
        <label>Images*</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />

        <label>Price*(If free price will be zero(0))</label>
        <input type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} placeholder='Price' min="0" />

        <label>Validity</label>
        <input type="number" value={formData.day} onChange={(e) => setFormData({ ...formData, day: e.target.value })} placeholder='Validity' min="0" />

        <div className="btn">
          <button className='cancel-button'>Cancel</button>
          <button className='submit-button' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddRoomWallpaper;
