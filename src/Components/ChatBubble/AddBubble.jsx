import React, { useState } from 'react';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
// import "./AddRoomWallpaper.css";



const AddBubble = () => {
  const [formData, setFormData] = useState({
    price: '',
    images: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.price < 0 || formData.day < 0) {
      toast.error('Price and validity cannot be negative');
      return;
    }

    const formDataToSend = new FormData();  
   
    formDataToSend.append('price', formData.price);
    formDataToSend.append('images', formData.images);

    try {
      const response = await fetch('https://use2fun.onrender.com/admin/chatBubble/add', {
        method: 'POST',
        body: formDataToSend,
      });
    
      const responseData = await response.json();
      
      console.log('Response:', response);
      console.log('Response Data:', responseData);
    
      if (response.ok) {
        setFormData({
          price: '',
          chatBubble: null,
        });
        toast.success('Wallpaper added successfully')
      } else {
        toast.error('Error submitting wallpaper');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      toast.error('Error submitting data');
    }

  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files[0] });  
  };

  return (
    <div className='addroom'>
      <h2>Add Chat Bubble</h2>
      
      <form className="container-addroom" onSubmit={handleSubmit}>
        <label>Images*</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />

        {/* <label>Validity</label>
        <input type="number" value={formData.day} onChange={(e) => setFormData({ ...formData, day: e.target.value })} placeholder='Validity' min="0" /> */}

        <label>Price*(If free price will be zero(0))</label>
        <input type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} placeholder='Price' min="0" />


        <div className="btn">
          <button className='cancel-button'>Cancel</button>
          <button className='submit-button' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddBubble;
