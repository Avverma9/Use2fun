import React from 'react';
import profile_pic from "../../assets/icons/profile_pic.png";
import phone_icon from "../../assets/icons/phone-icon.png";
import Email_icon from "../../assets/icons/Email-icon.png";
import Education_icon from "../../assets/icons/Education-icon.png";
import Location_icon from "../../assets/icons/Location-icon.png";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>User Profile</h3>
      <img
        src={profile_pic}
        alt="Profile-pic"
        className={styles.profilepic}
      />
      <div>
        <h4 className={styles.masterpanel}>Master Panel</h4>
        <p className={styles.masterpanel}>PHP</p>
      </div>
      <p className={styles.aboutmebtn}>About Me</p>
      <div className={styles.infocontainer}>
        <p>
          <img
            className={styles.icon}
            src={phone_icon}
            alt="Phone Icon"
          />
          Phone Number
        </p>
        <p>7087772970</p>
      </div>
      <div className={styles.infocontainer}>
        <p>
          <img
            className={styles.icon}
            src={Email_icon}
            alt="Email Icon"
          />
          Email
        </p>
        <p>admin@gmail.com</p>
      </div>
      <div className={styles.infocontainer}>
        <p>
          <img
            className={styles.icon}
            src={Education_icon}
            alt="Education Icon"
          />
          Education
        </p>
        <p>MCA</p>
      </div>
      <div className={styles.infocontainer}>
        <p>
          <img
            className={styles.icon}
            src={Location_icon}
            alt="Location Icon"
          />
          Location
        </p>
        <p>Mohali</p>
      </div>
    </div>
  );
};

export default Profile;
