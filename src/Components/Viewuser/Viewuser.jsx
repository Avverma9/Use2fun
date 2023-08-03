import React from "react";
import "./Viewuser.css";
import Title from "../common/Title";

const Viewuser = () => {
  return (
    <>
      <Title title="View User" />
      <div className="view-user">
        <div className="view-user1">
        <div className="user-keys">
          <div className="user-name">
            <p>User Name</p>
          </div>
          <div className="user-email">
            <p>Email</p>
          </div>
          <div className="user-number">
            <p>Mobile</p>
          </div>
          <div className="user-status1">
            <p>Status</p>
          </div>
          <div className="user-varify-email">
            <p>Is Email varified</p>
          </div>
          <div className="user-type">
            <p>User Type</p>
          </div>
          <div className="user-device-id">
            <p>Device ID</p>
          </div>
          <div className="user-device-type">
            <p>Device Type</p>
          </div>
          <div className="user-id-ban">
            <label htmlFor="user-ban">User ID(Ban/Unban)

              <select name="user-ban" id="user-ban">

                <option value="ban">Ban</option>
                <option value="unban">Unban</option>

              </select>

            </label>
          </div>
          <div className="user-badges">
            <label htmlFor="user-badges">Badges

              <select name="user-badges" id="user-badges">
                <option value="badges">Select Badges</option>
                <option value="ban">Ban</option>
                <option value="unban">Unban</option>

              </select>

            </label>
          </div>
          <div className="live-hotlist">
            <label htmlFor="live-hotlist">Live Hotlist

              <select name="live-hotlist" id="live-hotlist">

                <option value="ban">Ban</option>
                <option value="unban">Unban</option>

              </select>

            </label>
          </div>
</div>
<div className="user-values">
<div className="user-name">
            <p>Zishan Mohammad</p>
          </div>
          <div className="user-email">
            <p>mzishan922@gmail.com</p>
          </div>
          <div className="user-number">
            <p>6375360267</p>
          </div>
          <div className="user-status1">
            <p>Approved</p>
          </div>
          <div className="user-varify-email">
            <p>Varified</p>
          </div>
          <div className="user-type">
            <p>Normal</p>
          </div>
          <div className="user-device-id">
            <p>4563654896325</p>
          </div>
          <div className="user-device-type">
            <p>Android</p>
          </div>
</div>
        </div>
        <div className="view-user2">
        <div className="user-keys">
          <div className="user-follower">
            <p>No of Followers</p>
          </div>
          <div className="user-following">
            <p>No of Following</p>
          </div>
          <div className="user-likes">
            <p>No of Likes</p>
          </div>
          <div className="user-comment">
            <p>No of Comment</p>
          </div>
          <div className="user-viewsno">
            <p>No of views</p>
          </div>
          <div className="user-blocklist">
            <p>No of Block User</p>
          </div>
          <div className="user-account">
            <p>No of Account</p>
          </div>
          <div className="user-live">
            <label htmlFor="user-live">Live(Ban/Unban)

              <select name="user-live" id="user-live">

                <option value="ban">Ban</option>
                <option value="unban">Unban</option>

              </select>

            </label>
          </div>
          <div className="user-deviceid-ban">
            <label htmlFor="user-deviceban">Device ID(Ban/Unban)

              <select name="user-deviceban" id="user-deviceban">

                <option value="ban">Ban</option>
                <option value="unban">Unban</option>

              </select>

            </label>
          </div>
          <button className="remove-button">Remove DP</button>
        </div>
        <div className="user-values">
        <div className="user-follower">
            <p>10M</p>
          </div>
          <div className="user-following">
            <p>12</p>
          </div>
          <div className="user-likes">
            <p>34.2k</p>
          </div>
          <div className="user-comment">
            <p>2.5k</p>
          </div>
          <div className="user-viewsno">
            <p>1M</p>
          </div>
          <div className="user-blocklist">
            <p>1</p>
          </div>
          <div className="user-account">
            <p>1</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Viewuser;
