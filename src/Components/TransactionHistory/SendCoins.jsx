import React, { useState } from 'react';
import styles from "./SendCoins.module.css";

const SendCoins = () => {
  const [admin, setAdmin] = useState('');

  const handleChange = (event) => {
    setAdmin(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Coins sent to:', admin);
  };

  const handleCancel = () => {
    setAdmin('');
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Send Coins</h3>
      <div className={styles.formcontainer}>
        <label className={styles.label} htmlFor="adminInput">Admin*</label>
        <input
          type="text"
          id="adminInput"
          value={admin}
          onChange={handleChange}
          required
          className={styles.inputfield}
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
