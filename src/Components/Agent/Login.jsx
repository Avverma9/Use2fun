import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";

const AgentLogin = () => {
  const [number, setNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    { value: "+1", label: "United States", flag: "US-flag-image-url" },
    // Add more countries here...
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedCountry && number) {
      const response = await axios.post(
        "https://use2fun.onrender.com/agent/loginmobile",
        {
          number: selectedCountry.value + number, // Add country code to the number
        }
      );

      if (response.data) {
        alert("Data has been received");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="login-image">
          <img src="https://i.gifer.com/IPNp.gif" alt="" />
        </div>
        <div className="phone-no">
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
        </div>
      </form>
    </>
  );
};

export default AgentLogin;
