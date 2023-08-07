import React from 'react';
import './LockRoom.css';

const LockRoom = () => {
  return (
    <div className='container-a'>
        <h2>Lock Room</h2>
        <div className='id-btn'>
            <p>Lock Room id</p>
            <input type="text" />
            <button className='add-btn-b'>ADD</button>
        </div>
        <button className='cancel-btn-a'>CANCEL</button>
        <button className='submit-btn-b'>SUBMIT</button>
    </div>
  )
}

export default LockRoom