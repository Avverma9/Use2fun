import React from 'react'
import styles from "./AddBanner.module.css"


function AddBanner() {
  return (
    <div id='main'>
        <h3>Add Banner</h3>
        <div className='input_div input1'>
            <label htmlFor="">Image*</label><br />
            <div>
            <input type="file" name="" id=""  />
            </div> 
        </div>
        <div className='input_div input2'>
            <label htmlFor="">HyperLink*</label> <br />
            <input type="url" name="" id="" placeholder='Hyperlink'/>
        </div>

        <div className='Button_div'>
            <button className='btn btn1'>Cancel</button>
            <button className='btn btn2'>Submit</button>
        </div>
    </div>
  )
}

export default AddBanner