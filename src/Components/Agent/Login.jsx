import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";

const AgentLogin = () => {
  const [number, setNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    { value: "+1", label: "United States", flag: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fus-flag-circle&psig=AOvVaw0mgId7BDKs2o7jy1H0fUWt&ust=1691941969655000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICI_oy914ADFQAAAAAdAAAAABAZ" },
    { value: "+91", label: "India", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" },
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
