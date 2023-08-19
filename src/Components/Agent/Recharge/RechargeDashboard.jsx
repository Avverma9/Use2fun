import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './RechargeDashboard.css';

function RechargeDashboard() {
  const [usefunId, setUsefunId] = useState('');
  const [amount, setAmount] = useState('');

  const handleRecharge = async () => {
    try {
      const requestBody = {
        coinSellerId: '64d78e74ec14ab361c2f3032', 
        userId: usefunId,
        amount: parseInt(amount)
      };
  
      const response = await axios.post(
        'https://use2fun.onrender.com/agent/recharge/user',
        requestBody
      );
  
      if (response.data) {
        if (response.data === 'Not enough coins') {
          toast.error('Not enough coins');
        } else {
          toast.error(response.data.error);
        }
      } else {
        toast.success('Recharge successful');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error('An error occurred');
      }
    }
  };
  return (
    <div className='main-cont'>
      <div className='last-cont'>
        <div className='last-cont-1'>
        
          <label htmlFor='text'>Usefun Id</label>
          <div className='confirm-flex'>
          <input
            type='text'
            className='usefun-id-text'
            placeholder='enter usefun id'
            value={usefunId}
            onChange={(e) => setUsefunId(e.target.value)}
          />
        
        <div className='btn2'>
        <button className='cofirm-btn'>Confirm</button>
        </div>
        </div>
        </div>
        <div className='last-cont-1'>
          <label htmlFor='text'>Amount</label>
          <input
            type='text'
            className='usefun-id-text'
            placeholder='enter recharge amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className='button-sub'>
          <button className='confirm' onClick={handleRecharge}>
            Recharge
          </button>
        </div>
      </div>
    </div>
  );
}

export default RechargeDashboard;