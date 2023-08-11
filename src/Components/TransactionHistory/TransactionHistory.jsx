import React from 'react';
import User_icon from "../../assets/icons/user.png"
import styles from "./TrasactionHistory.module.css";

const transactions = [
  {
    sr: "1",
    image: User_icon,
    name: "Sumit Kumar",
    username: "27",
    email: "sumitsammy12345@gmail.com",
    price: "20 $",
    coin: "9255",
    orderId: "BNGODRID50650",
    status: "not completed",
  },
  
];

const TransactionHistory = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Transaction History</h3>
      <div className={styles.transactionrow}>
        <p>Sr.</p>
        <p>Image</p>
        <p>Name</p>
        <p>Username</p>
        <p>Email</p>
        <p>Price</p>
        <p>Coin</p>
        <p>OrderId</p>
        <p>Status</p>
      </div>
      {transactions.map((transaction, index) => (
        <div className={styles.transactionrow1} key={index}>
          <p>{transaction.sr}</p>
          
            <img className={styles.profile_img} src={transaction.image} alt="Profile-pic" />
          
          
            <p>{transaction.name}</p>
            <p>{transaction.username}</p>
            <p>{transaction.email}</p>
            <p>{transaction.price}</p>
            <p>{transaction.coin}</p>
            <p>{transaction.orderId}</p>
            <p>{transaction.status}</p>
          </div>
        
      ))}
    </div>
  );
}

export default TransactionHistory;
