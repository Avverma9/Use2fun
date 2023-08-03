import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./AddAgency.module.css";

const AddAgency = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    userID: '',
    agencyName: '',
    email: '',
    mobile: '',
    agencyImage: '',
    aadharFront: '',
    aadharBack: '',
  });

  // const [signedIn, setSignedIn] = useState(
  //   localStorage.getItem("signedIn") === "true"
  // );

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

  // useEffect(() => {
  //   if (!signedIn) {
  //     navigate("/signin");
  //   }
  // }, [signedIn]);

  return (
    <div className={styles.main}>
      <h3>AddAgency</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>UserID*</label>
        <input
          type="text"
          name="userID"
          value={formData.userID}
          onChange={handleInputChange}
        />

        <label>Agency Name*</label>
        <input
          type="text"
          name="agencyName"
          value={formData.agencyName}
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
        <input
          type="file"
          name="agencyImage"
          onChange={handleInputChange}
        />

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

export default AddAgency;
