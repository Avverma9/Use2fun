import React from 'react';
import "./AddAppEntry.css";

const AppEntry = () => {
  return (
    <div className='app-entry'>
        <h2>AppEntry</h2>
        <form className="container">
           <label>Images*</label>
           <input type="file" name="" id="" />
           <div className="btn">
            <button className='cancel-button'>Cancel</button>
            <button className='submit-button'>Submit</button>
           </div>
        </form>
    </div>
  )
}

export default AppEntry