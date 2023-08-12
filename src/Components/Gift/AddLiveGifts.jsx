import React, { useState, useEffect } from "react";

function AddLiveGifts() {
  const [coin, setCoin] = useState("");
  const [name, setName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("coin", coin);
    data.append("name", name);
    data.append("category_name", categoryName);
    data.append("images", images);

    const response = await fetch(
      "https://use2fun.onrender.com/admin/gift/add",
      {
        method: "POST",
        body: data,
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      window.location.reload();
    } else {
      console.log("Error: " + response.status);
    }
  };

  const handleCancel = () => {
    setCoin("");
    setName("");
    setCategoryName("");
    setImages("");
    window.location.reload();
  };

  return (
    <div>
      <div className="Vip_main">
        <h3>Add Live Gift</h3>

        <div className="innerdiv">
          <label htmlFor="">Category List:</label> <br />
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Please Select category"
            onChange={(e) => setCategoryName(e.target.value)}
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
          />
        </div>
        <div className="innerdiv">
          <label htmlFor="">Coin* (days)*</label> <br />
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Coin"
            onChange={(e) => setCoin(e.target.value)}
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
        {/* <div className="innerdiv">
          <label htmlFor="">Thumbnail* (MP4)</label>
          <br />
          <div className="input">
            <input type="file" name="" id="" />
          </div>
        </div> */}
        {/* <div className="innerdiv">
          <label htmlFor="">Sound*</label> <br />
          <div className="input">
            <input type="file" name="" id="" />
          </div>
        </div> */}
        <div className="Button_div">
          <button className="btn btn1" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn2" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddLiveGifts;
