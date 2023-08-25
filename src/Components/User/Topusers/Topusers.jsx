import React, { useEffect, useState } from "react";
import "./Topusers.css";
import Title from "../../common/Title";

const Topusers = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://use2fun.onrender.com/user/topUser`);
        if (!res.ok) {
          throw new Error("Network response is not ok!!!");
        }
        const jsonData = await res.json();
        console.log(jsonData.data);
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Title title="Hotlist User" />
      <button className="hotlist-btn">Add Hot List User</button>
      <table className="table table-borderless mt-3">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Image</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data !== null
            ? Object.values(data).map((userData, i) => (
                <tr key={userData._id}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <img
                      src={userData.images && userData.images[0]}
                      alt="profile"
                      style={{
                        width: "40px",
                        height: "50px",
                      }}
                    />
                  </td>
                  <td>{userData.name}</td>
                  <td>N/A</td>
                  <td>{userData.mobile}</td>
                  <td>
                    <button className="remove-btn">Remove</button>
                  </td>
                </tr>
              ))
            : "Data Loading..."}
        </tbody>
      </table>
    </>
  );
};

export default Topusers;