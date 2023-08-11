import React, { useState } from 'react';
import styles from "./AddVehicle.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    day: '',
    price: '',
    level: '',
    vehicle:null,
    thumbnail: null,
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
    if (name === 'vehicle' || name === 'thumbnail' ) {
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
 

    const formDataToSend = new FormData();

    formDataToSend.append('vehicle', formData.vehicle);
    formDataToSend.append('thumbnail', formData.thumbnail);

    formDataToSend.append('day', formData.day);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('level', formData.level);

    try {
      const response = await fetch('https://use2fun.onrender.com/admin/vehicle/add', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response data:', responseData);
        toast.success('Vehicle added successfully.');
      } else {
        console.error('Failed to add Vehicle. Response status:', response.status);
        toast.error('Error occured while adding adding Vehicle.');
      }
    } catch (error) {
      console.error('Error adding Vehicle:', error);
    }
  };


  return (
    <div className={styles.main}>
      <h3>Add Vehicle</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
      <label>Image*</label>
        <input
          type="file"
          name="vehicle"
          onChange={handleFileChange}
        />

        <label>Thumbnail</label>
        <input
          type="file"
          name="thumbnail"
          onChange={handleFileChange}
        />
        <label>Level*</label>
        <input
          type="text"
          name="level"
          value={formData.level}
          onChange={handleInputChange}
        />
        <label>Price*</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />

        <label>Validity*</label>
        <input
          type="number"
          name="day"
          value={formData.day}
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
