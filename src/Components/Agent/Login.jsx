import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import './Login.css'

const AgentLogin = () => {
  const [number, setNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null); // To store selected country

  const countries = [
    { value: "+91", label: "India", flag: "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" },
    { value: "+1", label: "United States", flag: "https://cdn.britannica.com/73/4473-050-0D875725/Grand-Union-Flag-January-1-1776.jpg" },
    { value: "+44", label: "United Kingdom", flag: "https://cdn.britannica.com/29/22529-004-ED1907BE/Union-Flag-Cross-St-Andrew-of-George.jpg" },
    
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCountry) {
      alert("Please select a country");
      return;
    }

    const response = await axios.post(
      "https://use2fun.onrender.com/agent/loginmobile",
      {
        number: selectedCountry.value + number, // Add country code to the number
      }
    );

    if (response.data) {
      alert("Data has been received");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="login-image">
          <img src="https://i.gifer.com/IPNp.gif" alt="" />
        </div>
        <div className="input-country">
          <Select
            options={countries}
            value={selectedCountry}
            onChange={setSelectedCountry}
            placeholder="Select country"
            getOptionLabel={(option) => (
              <div>
                <img
                  src={option.flag}
                  alt={option.label}
                  style={{ width: "20px", marginRight: "10px" }}
                />
                {option.label}
              </div>
            )}
          />
        </div>
        <div className="input-number">
          <input
            type="text"
            value={number}
            placeholder="Enter your number"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button type="submit" className="agent-next">
          Next
        </button>
      </form>
    </>
  );
};

export default AgentLogin;
