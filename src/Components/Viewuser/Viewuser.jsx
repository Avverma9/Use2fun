import React, { useState, useEffect } from "react";
import "./Viewuser.css";
import Title from "../common/Title";

const Viewuser = () => {

  const [data, setData] = useState([])
  const userId = localStorage.getItem("userId"); 
  console.log(userId)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://use2fun.onrender.com/user/getbyid", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: userId }),
          
        });
        console.log(userId, "233333333333333333")
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  console.log(data);
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
          {data.map((user, index) => (
            <div key={index} className="user-values">
            <div className="user-name">
              <p>{user.name}</p>
            </div>
            <div className="user-email">
              <p>{user.name}</p>
            </div>
            <div className="user-number">
              <p>{user.mobile}</p>
            </div>
            <div className="user-status1">
              <p>{user.status}</p>
            </div>
            <div className="user-varify-email">
              <p>{user.status}</p>
            </div>
            <div className="user-type">
              <p>{user.user_type}</p>
            </div>
            <div className="user-device-id">
              <p>{user._id}</p>
            </div>
            <div className="user-device-type">
              <p>Android</p>
            </div>
          </div>
           ))}

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
           {data.map((user, index) => (
            <div key={index} className="user-values">
            <div className="user-follower">
              <p>{user.followers}</p>
            </div>
            <div className="user-following">
              <p>{user.following}</p>
            </div>
            <div className="user-likes">
              <p>{user.likes}</p>
            </div>
            <div className="user-comment">
              <p>{user.comments}</p>
            </div>
            <div className="user-viewsno">
              <p>{user.views}</p>
            </div>
            <div className="user-blocklist">
              <p>{user.block_users}</p>
            </div>
            <div className="user-account">
              <p>{user.accounts}</p>
            </div>
          </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Viewuser;
