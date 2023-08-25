import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import './RechargeDashboard.css';
import avatar from "../../../assets/icons/avatar.png";

function RechargeDashboard({coinseller}) {
  const [usefunId, setUsefunId] = useState('');
  const [amount, setAmount] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleRecharge = async () => {
    try {
      const requestBody = {
        coinSellerId: coinseller,
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
        setShowModal(true); 
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error('An error occurred');
      }
    }
  };

  const handleConfirmUserId = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://use2fun.onrender.com/user/getbyuserId/${usefunId}`
      );

      if (response.data) {
        console.log(response.data, "RESPONSE DATA");
        setUserData(response.data.data);
      }
    } catch (error) {
      console.error("API Request Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmModal = () => {
    setShowModal(true);
  };

  const handleRechargeConfirmed = () => {
    handleRecharge();
    handleCloseModal();
  };

  const handleCancelUserData=()=>{
    setUserData(null)
    setUsefunId("")
  }

  return (
    <div className='main-cont'>
      <div className='last-cont'>
        <div className='last-cont-1'>
          <label htmlFor='text'>Usefun Id</label>
          <div className='confirm-flex'>
            {userData ? (
              <div>
                <div className='avatar-main-div'>
                  <div>
                    <img className='img-avatar' src={(userData.images && userData.images[0]) || avatar} alt="" />
                  </div>
                  <div className='name-div'>
                    <p>{userData.name}</p>
                    {userData.userId && (
                      <h6 className='usefunId-bold'>Usefuns ID: {userData.userId}</h6>
                    )}
                  </div>
                  <div><button className='cancel-btn' onClick={handleCancelUserData}>Cancel</button></div>
                </div>
              </div>
            ) : (
              <input
                type='text'
                className='usefun-id-text'
                placeholder='enter usefun id'
                value={usefunId}
                onChange={(e) => setUsefunId(e.target.value)}
              />
            )}
            {!userData && (
              <div className='btn2'>
                <button className='cofirm-btn' onClick={handleConfirmUserId}>
                  Confirm
                </button>
              </div>
            )}
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
          <button className='confirm' onClick={handleConfirmModal}>
            Recharge
          </button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Are you Sure ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {userData ? (
            <div className='avatar-main-div'>
              <div>
                <img className='img-avatar' src={(userData.images && userData.images[0]) || avatar} alt="" />
              </div>
              <div className='name-div'>
                <p>Name : {userData.name}</p>
                {userData.userId && (
                  <h6 className='usefunId-bold'>Usefuns ID: {userData.userId}</h6>
                )}
                <p>Are You sure to recharge{" "}
                  {amount} diamonds to this usefun Id?</p>
              </div>
            </div>
          ) : ""}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant='primary' onClick={handleRechargeConfirmed}>
            Confirm Recharge
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RechargeDashboard;
