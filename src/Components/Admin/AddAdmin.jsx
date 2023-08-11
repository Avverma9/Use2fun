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

    try {
      const response = await fetch('https://use2fun.onrender.com/admin/make/adminUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: formData.userName }),
      });

      if (response.ok) {
        console.log('POST request successful');
        toast.success('User is Admin now ');
      } else {
        console.error('POST request failed');
      }
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };

  return (
    <div className='add-admin'>
      <h2>AddAdmin</h2>
      <form onSubmit={handleSubmit}>
        <label>
          UserName*
        </label>
        <input
          type="text"
          name="userName"
          placeholder="UserName"
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
