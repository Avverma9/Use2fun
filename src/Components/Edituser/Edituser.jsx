import React from "react";
import Title from "../common/Title";

const Edituser = () => {
  return (
    <>
      <Title title="Edit User" />
      <div className="fields">
        <h6>Username</h6>
        <input type="text" name="username" id="username" />
      </div>
      <div className="fields">
        <h6>Email</h6>
        <input type="email" name="email" id="email" />
      </div>
      <div className="fields">
        <h6>Purchased Coin</h6>
        <input type="number" name="purchasedcoin" id="purchasedcoin" />
      </div>
      <div className="fields">
        <h6>Mobile</h6>
        <input type="number" name="mobile" id="mobile" />
      </div>
      <div className="field-button">
        <button>Cancel</button>
        <button>Submit</button>
      </div>
    </>
  );
};

export default Edituser;
