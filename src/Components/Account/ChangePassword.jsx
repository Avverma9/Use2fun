import React, { useState } from "react";
import Profile from './Profile';
import styles from "./ChangePassword.module.css";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdatePassword = () => {

    const apiUrl = "";
    const authToken = "";
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password must match");
      return;
    }
    const data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Password updated successfully!", data);
        setMessage("Password updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating password:", error);
        setMessage("Error updating password. Please try again.");
      });
  };

  return (
    <div className={styles.container}>
      <Profile />
      <div style={{ marginTop: "234px", marginBottom: "1137px" }}>
        <div className={styles.settings}>
          <p className={styles.heading}>Settings</p>
          <p className={styles.heading}>Change password</p>
        </div>
        {message && <p className={styles.message}>{message}</p>}
        <div className={styles.inputcontainer}>
          <label className={styles.label}>Old Password</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Old Password"
            className={styles.inputfield}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.label}>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            className={styles.inputfield}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.label}>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className={styles.inputfield}
          />
        </div>
        <button
          onClick={handleUpdatePassword}
          className={styles.updatebtn}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
