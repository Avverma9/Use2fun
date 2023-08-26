import { useEffect, useState } from "react";
import Title from "../../common/Title";
import "./Edituser.css";
import { GiRoundStar } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Edituser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    coins: "",
    mobile: "",
  });

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://use2fun.onrender.com/user/getbyid/${id}`
      );
      const jsonData = await response.json();
      console.log(jsonData.data)
      setUserData(jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://use2fun.onrender.com/admin/user/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        console.log("User data updated successfully");
        toast.success("Data Successfully edited")

      } else {
        console.error("Error updating user data");
        toast.error("Error while editing")
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <>
      <Title title="Edit User" />
      <div className="fields">
        <h6>
          Username
          <GiRoundStar className="star-icons" />
        </h6>
        <input
          type="text"
          name="name"
          id="username"
          value={userData.name}
          onChange={handleInputChange}
          maxLength={20}
        />
      </div>
      <div className="fields">
        <h6>
          Email
          <GiRoundStar className="star-icons" />
        </h6>
        <input
          type="email"
          name="email"
          id="email"
          value={userData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="fields">
        <h6>
          Purchased Coin
          <GiRoundStar className="star-icons" />
        </h6>
        <input
          type="number"
          name="coins"
          id="purchasedcoin"
          value={userData.coins}
          onChange={handleInputChange}
        />
      </div>
      <div className="fields">
        <h6>
          Mobile
          <GiRoundStar className="star-icons" />
        </h6>
        <input
          type="number"
          name="mobile"
          id="mobile"
          value={userData.mobile}
          onChange={handleInputChange}
        />
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

export default Edituser;
