import React, { useState } from 'react';
import "./AddSubAdmin.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSubAdmin = () => {
  const [formData, setFormData] = useState({
    userId: '',
    email: '',
    mobile: '',
    role: '',
    aadharFront: null,
    aadharBack: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    if (formData.aadharFront) {
      formDataToSend.append('images', formData.aadharFront);
    }
    if (formData.aadharBack) {
      formDataToSend.append('images', formData.aadharBack);
    }

    formDataToSend.append('userId', formData.userId);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('mobile', formData.mobile);
    formDataToSend.append('role', formData.role);

    try {
      const response = await fetch('https://use2fun.onrender.com/admin/subadmin/add', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response data:', responseData);
        toast.success('Sub Admin added successfully.');
      } else {
        console.error('Failed to add Sub Admin. Response status:', response.status);
        toast.error('Error occurred while adding Sub Admin.');
      }
    } catch (error) {
      console.error('Error adding Sub Admin:', error);
    }
  };

  return (
    <div className="main">
      <h3>Add Sub Admin</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label>UserID*</label>
        <input
          type="text"
          name="userId"
          value={formData.userID}
          onChange={handleInputChange}
        />
        <label>Email*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label>Mobile*</label>
        <input
          type="number"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
        />

        <label>Assign Role</label>
        <select
          name="role"
          value={formData.assignRole}
          onChange={handleInputChange}
        >
          <option value="">Select Role</option>
          <option value="subadmin">Subadmin</option>
          <option value="admin">Admin</option>
        </select>

        <label>AadharCard Front/ID-Proof</label>
        <input
          type="file"
          name="aadharFront"
          onChange={handleFileChange}
        />

        <label>AadharCard Back/ID-Proof</label>
        <input
          type="file"
          name="aadharBack"
          onChange={handleFileChange}
        />

        <div className="subadmin-btn">
          <button type="button" className="cancelbtn">Cancel</button>
          <button type="submit" className="submitbtn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddSubAdmin;
