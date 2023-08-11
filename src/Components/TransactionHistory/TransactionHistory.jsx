import React, { useEffect,useState } from 'react';
import User_icon from "../../assets/icons/user.png"
import styles from "./TrasactionHistory.module.css";



const TransactionHistory = () => {
  useEffect(()=>{
    const fetchData = async()
  })
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Transaction History</h3>
      <div className={styles.transactionrow}>
      <table>
      <tr>
        <th>Sr.</th>
        <th>Image</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Price</th>
        <th>Coin</th>
        <th>OrderId</th>
        <th>Status</th>
        </tr>
        {}
        </table>
      </div>
     
    </div>
  );
}

export default TransactionHistory;
