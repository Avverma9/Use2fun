import React from 'react';
import './LockRoom.css';

const LockRoom = () => {
  return (
    <div>
        <h2>Lock Room</h2>
        <div className='lock-room'>
            <p>Lock Room id</p>
            <input type="text" />
            <button className='cancel-btn-a'>ADD</button>
        </div>
        <button className='cancel-btn-a'>CANCEL</button>
        <button className='submit-btn-b'>SUBMIT</button>
    </div>
  )
}

export default LockRoom