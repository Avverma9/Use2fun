import React, { useEffect, useState } from "react";
import "./Pushmessage.css";
import { GiRoundStar } from "react-icons/gi";
import Title from "../common/Title";

const Pushmessage = () => {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://use2fun.onrender.com/user/getall"
        );
        const jsonData = await response.json();
        setUser(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setLoading(false);

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://use2fun.onrender.com/admin/message/send",
      {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          message: message,
        }),
      }
    );

    if (response.status === 200) {
      setMessage("");
      setUserId("");
    }
  };
  console.log(userId);
  console.log(message);
  return (
    <>
      <Title title="Send Message" />
      <div className="fields">
        <h6>
          Select User
          <GiRoundStar className="star-icons" />
        </h6>
        {/* <input type="" name="username" id="username" /> */}
        <select value={userId} onChange={(e) => setUserId(e.target.value)}>
          <option value="">Select user</option>
          {!loading &&
            user.length !== 0 &&
            user.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
        </select>
      </div>
      <div className="fields">
        <h6>
          Message
          <GiRoundStar className="star-icons" />
        </h6>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="field-button">
        <button className="cancel-butt">Cancel</button>
        <button className="submit-butt" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Pushmessage;
