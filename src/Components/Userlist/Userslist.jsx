import React from "react";
import "./Userslist.css";
import Title from "../common/Title";

const Userslist = () => {
  return (
    <>
      <Title title="Mannage Report" />
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
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Bio</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Sourav007</td>
            <td>example@example.com</td>
            <td>9090909090</td>
            <td>bio...</td>
            <td>2023-05-22</td>
            <td>status..</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Userslist;
