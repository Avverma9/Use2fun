import React from 'react'
import "./Pushmessage.css"
import { GiRoundStar } from "react-icons/gi";
import Title from '../common/Title';

const Pushmessage = () => {
  return (
    <>
      <Title title="Send Message" />
      <div className="fields">
        <h6>
          Select User
          <GiRoundStar className="star-icons" />
        </h6>
        <input type="" name="username" id="username" />
      </div>
      <div className="fields">
        <h6>
          Message
          <GiRoundStar className="star-icons" />
        </h6>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className="field-button">
        <button className="cancel-butt">Cancel</button>
        <button className="submit-butt">Submit</button>
      </div>
    </>
  );
}

export default Pushmessage