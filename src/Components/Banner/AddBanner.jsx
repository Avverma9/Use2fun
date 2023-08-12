import React, { useState } from 'react'
import styles from "./AddBanner.module.css"
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 






function AddBanner() {

  const [formData, setFormData] = useState({
    link: '',
    banner: null 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();  
    formDataToSend.append('link', formData.link);
    formDataToSend.append('banner', formData.banner);

    try {
      const response = await fetch('https://use2fun.onrender.com/admin/banner/add', {
        method: 'POST',
        body: formDataToSend,
      });
    
      const responseData = await response.json();
      
      console.log('Response:', response);
      console.log('Response Data:', responseData);
    
      if (response.ok) {
        setFormData({
          link: '',
          banner: null,
        });
        toast.success('Banner added successfully')
      } else {
        toast.error('Error submitting Banner');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      toast.error('Error submitting data');
    }

  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, banner: e.target.files[0] });  
  };


  return (
    <div id='main'>
      <form onSubmit={handleSubmit}>
        <h3>Add Banner</h3>
        <div className='input_div input1'>
            <label htmlFor="">Image*</label><br />
            <div>
            <input type="file" name="banner" id="" onChange={handleFileChange} />
            </div> 
        </div>
        <div className='input_div input2'>
            <label htmlFor="">HyperLink*</label> <br />
            <input type="url" name="link" id="" placeholder='Hyperlink'  onChange={(e) => setFormData({ ...formData, link: e.target.value })}/>
        </div>

        <div className='Button_div'>
            <button className='btn btn1'>Cancel</button>
            <button type='submit' className='btn btn2'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default AddBanner