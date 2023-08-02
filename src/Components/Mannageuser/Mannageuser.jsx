import React from "react";
import "./Mannageuser.css";
import Title from "../common/Title";
import { useNavigate } from "react-router-dom";

const Mannageuser = () => {
  const navigate = useNavigate();
  return (
    <>
      <Title title="Mannage Users" />
      <div className="d-flex align-items-center gap-3">
        <div className="d-flex align-items-center gap-3">
          <p className="_sub-title">Search</p>
          <input type="text" name="search" id="search" className="py-1 px-3" />
        </div>
        <div className="d-flex align-items-center gap-3">
          <p className="_sub-title">Start Date</p>
          <input type="text" name="search" id="search" className="py-1 px-3" />
        </div>
        <div className="d-flex align-items-center gap-3">
          <p className="_sub-title">End Date</p>
          <input type="text" name="search" id="search" className="py-1 px-3" />
        </div>
        <input
          type="button"
          value="Search"
          className="py-1 px-3 text-white search-btn"
        />
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
          <tr>
            <th scope="row">1</th>
            <td>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="profile"
                style={{
                  width: "40px",
                  height: "50px",
                }}
              />
            </td>
            <td>Sourav</td>
            <td>Sourav007</td>
            <td>example@example.com</td>
            <td>9485959543</td>
            <td>43</td>
            <td>21</td>
            <td>
              <div className="user-status">Approved</div>
            </td>
            <td>
              {/* <button className="action-btn">
                <span>Action</span>
                <BiChevronDown />
              </button> */}
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
                      onClick={() => navigate("/view-user")}
                    >
                      View
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">Edit</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Delete</button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      Recieve Gift History
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">Send Gift History</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Coin History</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Live History</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Decline</button>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Mannageuser;
