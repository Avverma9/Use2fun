import React from "react";
import "./Liveusers.css";
import Title from "../common/Title";

const Liveusers = () => {
  return (
    <>
      <Title title="Mannage Live Users" />
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
            <th scope="col">Username</th>
            <th scope="col">Name</th>
            <th scope="col">Channel</th>
            <th scope="col">Status</th>
            <th scope="col">Date/Time</th>
            <th scope="col">Live Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Sourav007</td>
            <td>Sourav</td>
            <td>5579</td>
            <td>Archived</td>
            <td>2023-05-22 / 19:45:38</td>
            <td>254</td>
            <td>
              <div className="dropdown">
                <button
                  className="action-btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  // Missing Dropdown options
                >
                  <span>Action</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item">View</button>
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

export default Liveusers;
