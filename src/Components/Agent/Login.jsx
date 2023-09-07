import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const AgentLogin = () => {
  const navigate = useNavigate()
  const [responseOtp, setResponseOtp] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    showOtpInput: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email) {
      try {
        const response = await axios.post(
          "https://use2fun.onrender.com/agent/getotp",
          { email: formData.email }
        );

        if (response.data) {
          setResponseOtp(response.data.otp);
          localStorage.setItem("CoinSellerEmail", formData.email);
          setFormData((prevData) => ({
            ...prevData,
            showOtpInput: true,
          }));
          
        }
      } catch (error) {
        console.error("API Request Error:", error);
      }
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (formData.otp === responseOtp) {
      try {
        const storedEmail = localStorage.getItem("CoinSellerEmail");
        const emailResponse = await axios.post(
          "https://use2fun.onrender.com/agent/loginemail",
          { email: storedEmail }
        );

        if (emailResponse.data) {
          localStorage.setItem("AgentSignIn", true)
          console.log(emailResponse.data);
          toast.success("Login Successful");
          navigate("/agent-panel", { state: emailResponse.data });
        } else {
          toast.error("Login Failed")
        }
      } catch (error) {
        console.error("API Request Error:", error);
        toast.error("An error occurred");
      }
    } else {
      toast.error("Invalid OTP");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="agent-login-container">
      {formData.showOtpInput ? (
        <form onSubmit={handleOtpSubmit}>
          <div className="login-image">
            <img src="https://i.gifer.com/IPNp.gif" alt="" />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="otp"
              value={formData.otp}
              placeholder="Enter OTP"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="agent-next">
            Verify OTP
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="login-image">
            <img src="https://i.gifer.com/IPNp.gif" alt="" />
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="agent-next">
            Send OTP
          </button>
        </form>
      )}
    </div>
  );
};

export default AgentLogin;
