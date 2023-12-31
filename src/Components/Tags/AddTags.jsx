import React, { useState } from 'react';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
// import "./AddRoomWallpaper.css";



const AddTags = () => {
  const [formData, setFormData] = useState({
    name: '',
    images: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();  
   
    formDataToSend.append('name', formData.name);
    formDataToSend.append('images', formData.images);

    try {
      const response = await fetch('https://use2fun.onrender.com/admin/tags/add', {
        method: 'POST',
        body: formDataToSend,
      });
    
      const responseData = await response.json();
      
      console.log('Response:', response);
      console.log('Response Data:', responseData);
    
      if (response.ok) {
        setFormData({
          name: '',
          chatBubble: null,
        });
        toast.success('Tag added successfully')
      } else {
        toast.error('Error submitting Tag');
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
      <h2>Add Tags</h2>
      
      <form className="container-addroom" onSubmit={handleSubmit}>
        <label>Images*</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />

        <label>Name*</label>
        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder='Name' />


        <div className="btn">
          <button className='cancel-button'>Cancel</button>
          <button className='submit-button' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddTags;
