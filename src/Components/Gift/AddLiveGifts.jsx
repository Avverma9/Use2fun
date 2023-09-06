import React, { useState } from "react";
import "./AddLiveGifts.css";

function AddLiveGifts() {
  const [coin, setCoin] = useState("");
  const [name, setName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoryName || !coin || !images.length) {
      alert("Please fill in all required fields");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("coin", coin);
    formDataToSend.append("name", name);
    formDataToSend.append("category_name", categoryName);
    
    for (let i = 0; i < images.length; i++) {
      formDataToSend.append("images", images[i]);
    }

    try {
      const response = await fetch(
        "https://use2fun.onrender.com/admin/gift/add",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        window.location.reload();
      } else {
        console.log("Error: " + response.status);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleCancel = () => {
    setCoin("");
    setName("");
    setCategoryName("");
    setImages([]);
    window.location.reload();
  };

  return (
    <div>
      <div className="Vip_main">
        <h3>Add Live Gift</h3>

        <div className="innerdiv">
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Please add Gift"
            onChange={(e) => setCategoryName(e.target.value)}
            value={categoryName}
          />
        </div>
        <div className="innerdiv">
          <label htmlFor="">Name</label> <br />
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Title"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="innerdiv">
          <label htmlFor="">Coin*</label> <br />
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Coin"
            onChange={(e) => setCoin(e.target.value)}
            value={coin}
          />
        </div>
        <div className="innerdiv">
          <label htmlFor="">Image*</label> <br />
          <div className="input">
            <input
              type="file"
              name=""
              id=""
              onChange={(e) => setImages(e.target.files)}
            />
          </div>
        </div>
        <div className="Button_div">
          <button className="btn-btn1" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn-btn2" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddLiveGifts;
