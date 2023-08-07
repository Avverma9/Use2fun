import React from "react";
import './AddLiveGifts.css';

function AddLiveGifts() {
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
          />
        </div>
        <div className="innerdiv">
          <label htmlFor="">Title*</label> <br />
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Title"
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
          />
        </div>
        <div className="innerdiv">
          <label htmlFor="">Image*</label> <br />
          <div className="input">
            <input type="file" name="" id="" />
          </div>
        </div>
        <div className="innerdiv">
          <label htmlFor="">Thumbnail* (MP4)</label>
          <br />
          <div className="input">
            <input type="file" name="" id="" />
          </div>
        </div>
        <div className="innerdiv">
          <label htmlFor="">Sound*</label> <br />
          <div className="input">
            <input type="file" name="" id="" />
          </div>
        </div>
        <div className="Button_div">
          <button className="btn-btn1">Cancel</button>
          <button className="btn-btn2">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddLiveGifts;
