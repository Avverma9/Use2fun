import React, { useState } from 'react';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './AddAdmin.css';

const AddAdmin = () => {
  const [formData, setFormData] = useState({
    userName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!formData.userName){
      toast.error('Please enter valid userId')
      return
    }
  
    try {
      const response = await fetch('https://use2fun.onrender.com/admin/make/adminUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: formData.userName }),
      });
  
      const responseData = await response.json();
  
      if (response.ok && !responseData.error) {
        toast.success('User is Admin now.');
      } else {
        console.error('Failed to add Admin. Response data:', responseData);
        toast.error(responseData.error || 'Error occurred while adding Admin.');
      }
    } catch (error) {
      console.error('Error adding admin:', error);
      toast.error('An error occurred while adding Admin.');
    }
  };

  return (
    <div className='add-admin'>
      <h2>AddAdmin</h2>
      <form onSubmit={handleSubmit}>
        <label>
          UserId*
        </label>
        <input
          type="text"
          name="userName"
          placeholder="UserId"
          value={formData.userName}
          onChange={handleChange}
        />
        <div className='butt-container'>
          <button type="button" className='cancel-button'>Cancel</button>
          <button type="submit" className='submit-button'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddAdmin;
