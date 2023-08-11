import React, { useEffect,useState } from 'react';
import User_icon from "../../assets/icons/user.png"
import styles from "./TrasactionHistory.module.css";



const TransactionHistory = () => {
  const [transaction,setTransaction] = useState(null);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch("https://use2fun.onrender.com/admin/wallet/transaction/getall");
        if (!response.ok){
          throw new Error("error occupied");
        }
        const responsedata=await response.json();
        setTransaction(responsedata.data)
        console.log("result",responsedata.data)
      } catch (error){
        console.error("error",error)
      }
    }
    fetchData();
  },[])
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
        {transaction&&transaction.map((item,index)=>{
          <tr>
            <td>{index+1}</td>
            <td><img src={item.img_url} alt='image'/></td>
          </tr>
        })}
        </table>
      </div>
     
    </div>
  );
}

export default TransactionHistory;
