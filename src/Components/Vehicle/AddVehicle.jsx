import React, { useState } from 'react';
import styles from "./AddVehicle.module.css";

const AddVehicle = () => {
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
      <h3>Add Vehicle</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
      <label>Image*</label>
        <input
          type="file"
          name="aadharFront"
          onChange={handleInputChange}
        />

        <label>Thumbnail</label>
        <input
          type="file"
          name="aadharBack"
          onChange={handleInputChange}
        />
        <label>Level*</label>
        <input
          type="text"
          name="userID"
          value={formData.userID}
          onChange={handleInputChange}
        />
        <label>Price*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label>Validity*</label>
        <input
          type="number"
          name="mobile"
          value={formData.mobile}
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

export default AddVehicle;
