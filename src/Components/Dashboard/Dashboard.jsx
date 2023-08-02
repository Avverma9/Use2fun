import React from "react";
import { FaRegUser } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <h3 className="_title">Dashboard</h3>
      <div className="row">
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card card-1">
            <div className="card-body d-flex align-items-start gap-4">
              <h5>
                <FaRegUser size={50} color="#fff" />
              </h5>
              <div>
                <h5 className="card-title text-white">Total User</h5>
                <p className="card-text text-white">23</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card card-2">
            <div className="card-body d-flex align-items-start gap-4">
              <h5>
                <FaRegUser size={50} color="#fff" />
              </h5>
              <div>
                <h5 className="card-title text-white">Total Approved Host</h5>
                <p className="card-text text-white">23</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card card-3">
            <div className="card-body d-flex align-items-start gap-4">
              <h5>
                <FaRegUser size={50} color="#fff" />
              </h5>
              <div>
                <h5 className="card-title text-white">Total Rejected Host</h5>
                <p className="card-text text-white">23</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card card-3">
            <div className="card-body d-flex align-items-start gap-4">
              <h5>
                <FaRegUser size={50} color="#fff" />
              </h5>
              <div>
                <h5 className="card-title text-white">Total Pending Host</h5>
                <p className="card-text text-white">23</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
