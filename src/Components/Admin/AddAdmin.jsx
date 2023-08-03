import React, { useState } from 'react';

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
    <div>
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
        <div>
          <button type="button">Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddAdmin;