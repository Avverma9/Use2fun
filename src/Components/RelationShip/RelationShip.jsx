import React from 'react'
import './RelationShip.css';

const RelationShip = () => {
  return (
    <div>
        <h2>RelationShip</h2>
        <div>
            <p>Add Relationship</p>
            <input type="text" />
            <button className='add-btn-k'>ADD</button>
        </div>
        <button className='cancel-btn-a'>CANCEL</button>
        <button className='submit-btn-b'>SUBMIT</button>
    </div>
  )
}

export default RelationShip