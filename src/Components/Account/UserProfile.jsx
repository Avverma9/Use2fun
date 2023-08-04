import React, { useState } from "react";
import Profile from "./Profile";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [education, setEducation] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleEditProfile = () => {

    const apiUrl = "YOUR_API_ENDPOINT";
    const authToken = "YOUR_AUTH_TOKEN";

    const data = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      designation: designation,
      education: education,
      location: location,
    };

    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Profile updated successfully!", data);
        setMessage("Profile updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        setMessage("Error updating profile. Please try again.");
      });
  };

  return (
    <div className={styles.container}>
      <Profile />
      <div>
        <div className={styles.settings}>
          <p className={styles.label}>Settings</p>
          <p className={styles.label}>Change password</p>
        </div>
        {message && <p className={styles.message}>{message}</p>}
        <div className={styles.inputcontainer}>
          <label className={styles.inputlabel}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.inputfield}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.inputlabel}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputfield}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.inputlabel}>Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={styles.inputfield}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.inputlabel}>Designation</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className={styles.inputfield}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.inputlabel}>Education</label>
          <input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className={styles.inputfield}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.inputlabel}>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={styles.inputfield}
          />
        </div>
        <button
          className={styles.editbtn}
          onClick={handleEditProfile}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
