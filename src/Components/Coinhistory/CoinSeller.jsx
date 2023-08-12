import React from "react";

function CoinSeller() {
  return (
    <div>
      <div className="Vip_main">
        <h3>Add Coinseller</h3>

        <div className="innerdiv">
          <label htmlFor="">User Id**</label> <br />
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Please Select category"
          />
        </div>
        <div className="innerdiv">
          <label htmlFor="">Coin Seller Name*</label> <br />
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Title"
          />
        </div>
        <div className="innerdiv">
          <label htmlFor="">Email*</label> <br />
          <input
            className="input"
            type="email"
            name=""
            id=""
            placeholder="Coin"
          />
        </div>
        <div className="innerdiv">
          <label htmlFor="">Mobile*</label> <br />
          <div className="input">
            <input type="number" name="" id="" />
          </div>
        </div>
        <div className="innerdiv">
          <label htmlFor="">AadharCard Front</label>
          <br />
          <div className="input">
            <input type="file" name="" id="" />
          </div>
        </div>
        <div className="innerdiv">
          <label htmlFor="">AadharCard Back</label> <br />
          <div className="input">
            <input type="file" name="" id="" />
          </div>
        </div>
        <div className="Button_div">
          <button type="submit" className="btn btn1">Cancel</button>
          <button className="btn btn2">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CoinSeller;
