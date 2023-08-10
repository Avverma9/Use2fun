import React, { useState, useEffect } from "react";
import "./Mannageuser.css";
import Title from "../common/Title";
import { useNavigate } from "react-router-dom";

const Mannageuser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://use2fun.onrender.com/user/getall");
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAction = (user, action) => {
    localStorage.setItem("userId", JSON.stringify(user._id));

    switch (action) {
      case "view":
        navigate("/view-user");
        break;
      case "edit":
        navigate("/edit-user");
        break;
      case "delete":
        
        break;
      case "received-gift-history":
        navigate("/recieved-gift-history")
        break;
      case "send-gift-history":
        navigate("/send-gift-history")
        
        break;
      case "coin-history":
        navigate("/coin-history")
        break;
      case "live-history":
        navigate("/live-history")
        break;
      case "decline":
        
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Title title="Mannage Users" />
      <div className="d-flex align-items-center gap-1 input-fields">
        <div className="d-flex align-items-center gap-1">
          <p className="_sub-title">Search</p>
          <input type="text" name="search" id="search" className="p-1" />
        </div>
        <div className="d-flex align-items-center gap-1">
          <p className="_sub-title">Start Date</p>
          <input type="text" name="search" id="search" className="p-1" />
        </div>
        <div className="d-flex align-items-center gap-1">
          <p className="_sub-title">End Date</p>
          <input type="text" name="search" id="search" className="p-1" />
        </div>
        <button className="py-1 px-3 text-white search-btn">Search</button>
      </div>

      <table className="table table-borderless mt-3">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Coin</th>
            <th scope="col">Purchased Coin</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img
                  src={user.img_url}
                  alt="profile"
                  style={{
                    width: "40px",
                    height: "50px",
                  }}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.userId}</td>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>{user.coins}</td>
              <td>{user.coins}</td>
              <td>
                <div className="user-status">{user.status}</div>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="action-btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Action</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleAction(user, "view")}
                      >
                        View
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleAction(user, "edit")}
                      >
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleAction(user, "delete")}
                      >
                        Delete
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() =>
                          handleAction(user, "received-gift-history")
                        }
                      >
                        Recieved Gift History
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleAction(user, "send-gift-history")}
                      >
                        Send Gift History
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleAction(user, "coin-history")}
                      >
                        Coin History
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleAction(user, "live-history")}
                      >
                        Live History
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleAction(user, "decline")}
                      >
                        Decline
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Mannageuser;
