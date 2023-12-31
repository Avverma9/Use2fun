import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewSvip.css"

function ViewVip() {
  const navigate = useNavigate();
  const [vipdata, setVipdata] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://use2fun.onrender.com/admin/vip/getall"
        );
        if (!response.ok) {
          throw new Error("An error occupied");
        }
        const jsonData = await response.json();
        setVipdata(jsonData.data);
        console.log("result", jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleNavigate = () => {
    navigate("/add-svip");
  };

  return (
    <div id="vip_main">
      <div className="vip_header">
        <h3>View SVip</h3>
        <button className="vip_btn" onClick={handleNavigate}>
          Add Svip
        </button>
      </div>

      <table id="vip_table">
        <tr>
          <th className="priceth">Sr.</th>
          <th className="priceth">Vip Image</th>
          <th className="priceth" width="10px">
            Price
          </th>
          <th className="priceth">Level</th>
          <th className="priceth">Validity</th>
          <th className="priceth">Action</th>
        </tr>

        {vipdata &&
          vipdata.map((item, index) => (
            <tr key={index} className="row2">
              <td className="price">{index + 1}</td>
              <td className="price">
                <img src={item.images[0]} alt="image" />
              </td>
              <td className="price">{item.price}</td>
              <td className="price">{item.level}</td>
              <td className="price">{item.day}(in days)</td>
              <select name="" id="">
                Action
                <option value="action">Action</option>
              </select>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default ViewVip;
