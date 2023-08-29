import React, { useEffect, useState } from 'react';
import styles from "./SendCoins.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendCoins = () => {
  const [adminUsers, setAdminUsers] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState('');
  const [coins, setCoins] = useState();

  useEffect(() => {
    fetch('https://use2fun.onrender.com/admin/adminUser/getall')
      .then(response => response.json())
      .then(data => {
        if (data.status === 1) {
          setAdminUsers(data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching admin users:', error);
      });
  }, []);

  const handleAdminChange = (e) => {
    const selectedUserId = e.target.value;
    setSelectedAdmin(selectedUserId);
  };

  const handleCoinsChange = (e) => {
    const value = e.target.value;
    const numericValue = parseInt(value);

    if (!isNaN(numericValue)) {
      setCoins(numericValue);
    } else {
      setCoins('');
    }
  };

  const handleSubmit = () => {
    if (selectedAdmin && coins) {
      const dataToSend = {
        userId: selectedAdmin,
        coins: coins,
      };

      fetch('https://use2fun.onrender.com/admin/send/coin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Coins sent successfully:', data);
          toast.success("Coin Send Successfully")
          setSelectedAdmin('');
          setCoins('');
        })
        .catch(error => {
          console.error('Error sending coins:', error);
          toast.error("Error while sending Coins")
        });
    }
  };

  const handleCancel = () => {
    setSelectedAdmin('');
    setCoins('');
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Send Coins</h3>
      <div className={styles.formcontainer}>
        <label className={styles.label} htmlFor="adminInput">Admin*</label>
        <select className={styles.selectadmin} name="admin" value={selectedAdmin} onChange={handleAdminChange}>
          <option value="">Select an admin</option>
          {adminUsers.map(admin => (
            admin.userDetails.map(user => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))
          ))}
        </select>
        <label>Coins</label>
        <input
          className={styles.coinsInput}
          type="number"
          name="coins"
          value={coins}
          onChange={handleCoinsChange}
        />
      </div>
      <div className={styles.buttonscontainer1}>
        <button className={styles.cancelbuttoncoin} onClick={handleCancel}>Cancel</button>
        <button className={styles.submitbuttoncoin} onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default SendCoins;
