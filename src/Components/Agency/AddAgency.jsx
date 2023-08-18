import React, { useState } from 'react';
import styles from './AddAgency.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAgency = () => {
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    mobile: '',
    email: '',
    agency: null,
    aadhar_front: null,
    aadhar_back: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'agency' || name === 'aadhar_front' || name === 'aadhar_back') {
      if (files.length > 0) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: files[0],
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name) {
      toast.error('Please enter the agency name.');
      return;
    }

    if (!formData.mobile || isNaN(formData.mobile) || formData.mobile.length !== 10) {
      toast.error('Please enter a valid 10-digit mobile number.');
      return;
    }

    const formDataToSend = new FormData();

    if (formData.agency) {
      formDataToSend.append('images', formData.agency);
    }
    if (formData.aadhar_front) {
      formDataToSend.append('images', formData.aadhar_front);
    }
    if (formData.aadhar_back) {
      formDataToSend.append('images', formData.aadhar_back);
    }

    formDataToSend.append('userId', formData.userId);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('mobile', formData.mobile);
    formDataToSend.append('email', formData.email);

    try {
      const response = await fetch('https://use2fun.onrender.com/admin/agency/add', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response data:', responseData);
        toast.success('Agency added successfully.');
      } else {
        console.error('Failed to add agency. Response status:', response.status);
        toast.error('Error occurred while adding agency.');
      }
    } catch (error) {
      console.error('Error adding agency:', error);
    }
  };

  return (
    <div className={styles.main}>
      <h3>Add Agency</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>UserID*</label>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleInputChange}
        />

        <label>Agency Name*</label>
        <input
          type="text"
          name="name"
          value={formData.name}
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

        <label>Agency Image</label>
        <input type="file" name="agency" onChange={handleFileChange} />

        <label>AadharCard Front/ID-Proof</label>
        <input type="file" name="aadhar_front" onChange={handleFileChange} />

        <label>AadharCard Back/ID-Proof</label>
        <input type="file" name="aadhar_back" onChange={handleFileChange} />

        <div className={styles.btn}>
          <button type="button" className={styles.cancelbtn}>
            Cancel
          </button>
          <button type="submit" className={styles.submitbtn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAgency;
