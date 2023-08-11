import React, { useEffect } from "react";
import Title from "../common/Title";
import "./Edituser.css";
import { GiRoundStar } from "react-icons/gi";

const Edituser = () => {
  return (
    <>
      <Title title="Edit User" />
      <div className="fields">
        <h6>
          Username
          <GiRoundStar className="star-icons" />
        </h6>
        <input type="text" name="username" id="username" />
      </div>
      <div className="fields">
        <h6>
          Email
          <GiRoundStar className="star-icons" />
        </h6>
        <input type="email" name="email" id="email" />
      </div>
      <div className="fields">
        <h6>
          Purchased Coin
          <GiRoundStar className="star-icons" />
        </h6>
        <input type="number" name="purchasedcoin" id="purchasedcoin" />
      </div>
      <div className="fields">
        <h6>
          Mobile
          <GiRoundStar className="star-icons" />
        </h6>
        <input type="number" name="mobile" id="mobile" />
      </div>
      <div className="field-button">
        <button className="cancel-butt">Cancel</button>
        <button className="submit-butt">Submit</button>
      </div>
    </>
  );
};

export default Edituser;
