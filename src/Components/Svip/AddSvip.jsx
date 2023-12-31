import React, { useState } from 'react';
import './AddSvip.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddSvip() {
  const [formData, setFormData] = useState({
    svip: null,
    thumbnail: null,
    level: '',
    price: '',
    day: '',

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
    if (name === 'svip' || name === 'thumbnail') {
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

    if (formData.svip) {
      formDataToSend.append('images', formData.svip);
    }
    if (formData.thumbnail) {
      formDataToSend.append('images', formData.thumbnail); 
    }

    formDataToSend.append('level', formData.level);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('day', formData.day);


    try {
      const response = await fetch('https://use2fun.onrender.com/admin/svip/add', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response data:', responseData);
        toast.success('SVIP added successfully.');
      } else {
        console.error('Failed to add SVIP. Response status:', response.status);
        toast.error('Error occured while adding adding SVIP.');
      }
    } catch (error) {
      console.error('Error adding SVIP:', error);
    }
  };




  return (
    <form className="Vip_main" onSubmit={handleSubmit}>
    <div className='svip-head'>
      <h3 >Add  Svip</h3></div>
      <div className="innerdiv">
        <label htmlFor="">Image*</label> <br />
        <div className="input">
          <input type="file" name="svip" id="" onChange={handleFileChange} />
        </div>
      </div>
      <div className="innerdiv">
        <label htmlFor="">Thumbnail* (MP4)</label>
        <br />
        <div className="input">
          <input type="file" name="thumbnail" id="" onChange={handleFileChange}/>
        </div>
      </div>
      <div className="innerdiv">
        <label htmlFor="">Level*</label> <br />
        <input className="input" type="number" name="level" id="" placeholder="Level" onChange={handleInputChange} />
      </div>
      <div className="innerdiv">
        <label htmlFor="">Price*</label> <br />
        <input className="input" type="number" name="price" id="" placeholder="Price" onChange={handleInputChange} />
      </div>
      <div className="innerdiv">
        <label htmlFor="">Validity* (days)*</label> <br />
        <input className="input" type="number" name="day" id="" placeholder="Validity" onChange={handleInputChange} />
      </div>
      <div className='Button_div'>
        <button className='btn-btn1'>Cancel</button>
        <button  type="submit" className='btn-btn2'>Submit</button>
      </div>
    </form>
  )
}

export default AddSvip