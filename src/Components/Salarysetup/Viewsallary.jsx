import React from 'react';
import './Sallary.css';

const Viewsallary=()=> {
  return (
   <div>
    <div className='salary-container'>
      <div className='row-1'>
        <div className='one-elem'>
          <label className='one-labeler'>Target Diamond</label>
          <input type='text'  />
        </div>
        <div className='one-elem'>
          <label className='two-labeler'>Get Sallary</label>
          <input type='text'  />
        </div>
        <div className='one-elem'>
          <label className='three-labeler'>Agency Commission</label>
          <input type='text'  />
        </div>
        <div className='one-elem'>
          <label className='three-labeler'>Admin Commission</label>
          <input type='text'  />
        </div>
        <div className='one-elem'>
          <label className='three-labeler'>Bid Commission</label>
          <input type='text'  />
        </div>
        <div className='view-btn'><button>View</button></div>
      </div>
     
      <div className='row-3'>
          <button className='submit-btn'>Submit</button>
        </div>
    </div>
   </div>
  )
}

export default Viewsallary