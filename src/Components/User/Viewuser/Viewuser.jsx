import React, { useState, useEffect } from "react";
import "./Viewuser.css";
import Title from "../../common/Title";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useParams } from "react-router-dom";

const Viewuser = () => {
  const [data, setData] = useState(null);
  const { id } = useParams()
  const [badges, setBadges] = useState([]);
  const [previousIsActive, setPreviousIsActive] = useState(false);
  const [liveBanData,setLiveBanData]=useState(false);

 



  const fetchBadges = async () => {
    try {
      const response = await fetch("https://use2fun.onrender.com/admin/tags/getall");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setBadges(jsonData.data);
      console.log("Fetched Badges:", jsonData.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };


  const handleRemoveDP = async () => {
    try {
      const response = await fetch(
        `https://use2fun.onrender.com/admin/user/removeDp/${id}`,
        {
          method: "POST",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const updatedData = await response.json();
      setData(updatedData.data);
      console.log("DP Removed:", updatedData.data);
      toast.success("DP removed");

      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://use2fun.onrender.com/user/getbyid/${id}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const jsonData = await response.json();
          setData(jsonData.data);
          console.log("Fetched Data:", jsonData.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    } catch (error) {
      console.error("Error removing DP:", error);
      toast.error("Error while removing DP");
    }
  };


  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://use2fun.onrender.com/user/getbyid/${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData.data);
      console.log("Fetched Data:", jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //Ban User
  const handleBanUser = async () => {
    try {
      const response = await fetch("https://use2fun.onrender.com/admin/user/banUserId", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          is_active_userId: !data.is_active_userId,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedData = await response.json();
      setData(updatedData.data);
      console.log("User ban status updated:", updatedData.data);
      toast.success(`User ${data.is_active_userId ? "unbanned" : "banned"}`);
    } catch (error) {
      console.error("Error toggling user ban:", error);
      toast.error("Error toggling user ban");
    }
  };

  //Ban Live
  const handleBanLive = async () => {
    try {
      const response = await fetch("https://use2fun.onrender.com/admin/user/banUserLive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          is_active_live: !data.is_active_live,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedData = await response.json();
      setData(updatedData.data);
      console.log("User Live ban status updated:", updatedData.data);
      toast.success(`User ${data.is_active_live ? "Live Unbanned" : "Live Banned"}`);
    } catch (error) {
      console.error("Error toggling user Live ban:", error);
      toast.error("Error toggling user Live ban");
    }
  };



  useEffect(() => {
    fetchData();
    fetchBadges();

  }, [])


  useEffect(() => {
    if (data) {
      setPreviousIsActive(data.is_active_userId);
      setLiveBanData(data.is_active_live)
    }
  }, [data]);


  console.log(data, "data");
  return (
    <>
      <Title title="View User" />
      <div className="view-user">
        {data ? (
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
                <label htmlFor="user-ban">
                  User ID(Ban/Unban)
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={data ? data.is_active_userId : false}
                      onChange={handleBanUser}
                    />
                    <span className="slider round"></span>
                  </label>
                </label>
              </div>
              <div className="user-badges">
                <label htmlFor="user-badges">
                  Badges
                  <select name="user-badges" id="user-badges">
                    <option value="badges">Select Badges</option>
                    {badges?.map(badge => (
                      <option key={badge._id} value={badge.name}>{badge.name}</option>
                    ))}
                  </select>
                </label>
              </div>
              {/* <div className="live-hotlist">
                <label htmlFor="live-hotlist">
                  Live Hotlist
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </label>
              </div> */}
            </div>
            {data && (
              <div key={data._id} className="user-values">
                <div className="user-name">
                  <p>{data.name}</p>
                </div>
                <div className="user-email">
                  <p>{data.name}</p>
                </div>
                <div className="user-number">
                  <p>{data.mobile}</p>
                </div>
                <div className="user-status1">
                  <p>{data.status}</p>
                </div>
                <div className="user-varify-email">
                  <p>{data.status}</p>
                </div>
                <div className="user-type">
                  <p>{data.user_type}</p>
                </div>
                <div className="user-device-id">
                  <p>{data._id}</p>
                </div>
                <div className="user-device-type">
                  <p>{data?.device || "Android"}</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p>No data available</p>
        )}
        {data ? (
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
                <label htmlFor="user-live">
                  Live(Ban/Unban)
                  <label class="switch">
                    <input type="checkbox"
                    checked={data ? data.is_active_live : false}
                    onChange={handleBanLive}
                    />
                    <span class="slider round"></span>
                  </label>
                </label>
              </div>
              <div className="user-deviceid-ban">
                <label htmlFor="user-deviceban">
                  Device ID(Ban/Unban)
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </label>
              </div>
              <button className="remove-button" onClick={handleRemoveDP}>
                Remove DP
              </button>
            </div>
            {data && (
              <div key={data._id} className="user-values">
                <div className="user-follower">
                  <p>{data.followers || 0}</p>
                </div>
                <div className="user-following">
                  <p>{data.following || 0}</p>
                </div>
                <div className="user-likes">
                  <p>{data.likes}</p>
                </div>
                <div className="user-comment">
                  <p>{data.comments}</p>
                </div>
                <div className="user-viewsno">
                  <p>{data.views}</p>
                </div>
                <div className="user-blocklist">
                  <p>{data.block_users}</p>
                </div>
                <div className="user-account">
                  <p>{data.accounts}</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
};

export default Viewuser;
