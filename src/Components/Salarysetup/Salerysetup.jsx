import React from 'react';
import './Sallary.css';

const Salerysetup = () => {
  return (
    <div className='salary-dashboard'>
      <div className='salary-container'>
        <div className='row1'>
          <div className='one-ele'>
            <label className='one-label'>Bins</label>
            <input type='text' value="2" />
          </div>
          <div className='one-ele'>
            <label className='two-label'>Diamond</label>
            <input type='text' value="6" />
          </div>
          <div className='one-ele'>
            <label className='three-label'>Cash</label>
            <input type='text' value="2" />
          </div>
          <div className='view-btn'><button>View</button></div>
        </div>
       
        <div className='row3'>
          <button className='submit-btn'>Submit</button>
        </div>
      </div>

    </div>
  )
}

export default Salerysetup
