import React, { useState } from 'react';
import styles from "./AddFrames.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddFrames = () => {
  const [formData, setFormData] = useState({
    image: null,
    thumbnail: null,
    level: '',
    price: '',
    day: ''
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

    if (!formData.image) {
      toast.error("Please add a Image")
      return
    }

    if (!formData.thumbnail) {
      toast.error("Please add a Thumbnail")
      return
    }

    if (!formData.level) {
      toast.error("Please add Level")
      return
    }

    if (!formData.price) {
      toast.error("Please add Price")
      return
    }

    if (!formData.day) {
      toast.error("Please add Validity")
      return
    }



    const formDataToSend = new FormData();

    if (formData.image) {
      formDataToSend.append('images', formData.image);
    }
    if (formData.thumbnail) {
      formDataToSend.append('images', formData.thumbnail);
    }

    formDataToSend.append('level', formData.level);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('day', formData.day);

    const checkboxElement = document.querySelector('input[type="checkbox"]');
    const is_visible = checkboxElement.checked;
  
    formDataToSend.append('is_visible', is_visible);

    try {
      const response = await fetch('https://use2fun.onrender.com/admin/frame/add', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        // console.log('Response data:', responseData);
        toast.success('Frames added successfully.');
      } else {
        // console.error('Failed to add Frames. Response status:', response.status);
        toast.error('Error occurred while adding Frames.');
      }
    } catch (error) {
      // console.error('Error adding Frames:', error);
    }
  };

  return (
    <div className={styles.main}>
      <h3>Add Frames</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Image*</label>
        <input
          type="file"
          name="image"
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

        <label style={{ display: 'inline-flex', alignItems: 'center', marginRight: '500px' }}>
          Show this to user?
          <input type="checkbox" style={{ margin: '0', padding: '0' }} />
        </label>

        <div className={styles.btn}>
          <button type="button" className={styles.cancelbtn}>Cancel</button>
          <button type="submit" className={styles.submitbtn}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddFrames;
