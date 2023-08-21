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

    if (!formData.userId) {
      toast.error('Please enter the valid userId.');
      return;
    }
    if (!formData.email) {
      toast.error('Please enter a valid email.');
      return;
    }
    
    if (!formData.mobile || isNaN(formData.mobile) || formData.mobile.length !== 10) {
      toast.error('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.role) {
      toast.error('Please select role.');
      return;
    }

    if (!formData.aadharFront) {
      toast.error('Please upload the AadharCard Front image.');
      return;
    }

    if (!formData.aadharBack) {
      toast.error('Please upload the AadharCard Back image.');
      return;
    }


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
      const response = await fetch('https://use2fun.onrender.com/admin/make/subAdminUser', {
        method: 'POST',
        body: formDataToSend,
      });
  
      const responseData = await response.json();
  
      if (response.ok && !responseData.error) {
        toast.success('User is SubAdmin now.');
      } else {
        console.error('Failed to add SubAdmin. Response data:', responseData);
        toast.error(responseData.error || 'Error occurred while adding SubAdmin.');
      }
    } catch (error) {
      console.error('Error adding Subadmin:', error);
      toast.error('An error occurred while adding SubAdmin.');
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
          value={formData.userId}
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
