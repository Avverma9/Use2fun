import React, { useState } from "react";
import axios from "axios";

function CoinSeller() {
  const [formData, setFormData] = useState({
    userId: "",
    seller_name: "",
    email: "",
    mobile: "",
    aadharf: null,
    aadharb: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'aadharf' || name === 'aadharb') {
      if (files.length > 0) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: files[0],
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("userId", formData.userId);
    formDataToSend.append("seller_name", formData.seller_name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("aadharf", formData.aadharf);
    formDataToSend.append("aadharb", formData.aadharb);

    try {
      const response = await axios.post(
        "https://use2fun.onrender.com/admin/coinSeller/add",
        formDataToSend
      );
      if (response.data) {
        alert("Data has been received");
      }
    } catch (error) {
    alert("Success")
    }
  };

  return (
    <div>
      <div className="Vip_main">
        <h3>Add Coinseller</h3>
        <form onSubmit={handleSubmit}>
          <div className="innerdiv">
            <label htmlFor="">User Id**</label> <br />
            <input
              className="input"
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleInputChange}
            />
          </div>
          <div className="innerdiv">
            <label htmlFor="">Coin Seller Name*</label> <br />
            <input
              className="input"
              type="text"
              name="seller_name"
              value={formData.seller_name}
              onChange={handleInputChange}
              placeholder="Title"
            />
          </div>
          <div className="innerdiv">
            <label htmlFor="">Email*</label> <br />
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>
          <div className="innerdiv">
            <label htmlFor="">Mobile*</label> <br />
            <div className="input">
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="innerdiv">
            <label htmlFor="">AadharCard Front</label>
            <br />
            <div className="input">
              <input
                type="file"
                accept="image/*"
                name="aadharf"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="innerdiv">
            <label htmlFor="">AadharCard Back</label> <br />
            <div className="input">
              <input
                type="file"
                accept="image/*"
                name="aadharb"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="Button_div">
            <button type="submit" className="btn btn2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CoinSeller;