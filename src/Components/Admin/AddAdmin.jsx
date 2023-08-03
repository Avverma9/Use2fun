import React, { useState } from 'react';
import './AddAdmin.css';

const AddAdmin = () => {

  const [formData, setFormData] = useState({
    userName: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);
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