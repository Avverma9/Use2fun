import React, { useState } from 'react';
import styles from "./AddSubAdmin.module.css";

const AddSubAdmin = () => {
  const [formData, setFormData] = useState({
    userID: '',
    email: '',
    mobile: '',
    assignRole:'',
    aadharFront: '',
    aadharBack: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className={styles.main}>
      <h3>Add Sub Admin</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>UserID*</label>
        <input
          type="text"
          name="userID"
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
          name="assignRole"
          value={formData.assignRole}
          onChange={handleInputChange}
        >
          <option value="">Select Role</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>

          
  

        <label>AadharCard Front/ID-Proof</label>
        <input
          type="file"
          name="aadharFront"
          onChange={handleInputChange}
        />

        <label>AadharCard Back/ID-Proof</label>
        <input
          type="file"
          name="aadharBack"
          onChange={handleInputChange}
        />

        <div className={styles.btn}>
          <button type="button" className={styles.cancelbtn}>Cancel</button>
          <button type="submit" className={styles.submitbtn}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddSubAdmin;
