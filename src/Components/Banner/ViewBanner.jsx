import React, { useEffect, useState } from "react";

function ViewBanner() {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch("https://use2fun.onrender.com/admin/banner/getall");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setBannerData(jsonData.data);
        console.log("Fetched Banner Data:", jsonData.data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <h3>View Banner</h3>
      <table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Banner Image</th>
            <th>HyperLink</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bannerData.map((item, index) => (
            <tr key={item._id}>
              <td className="bannertd">
                <div className="num">{index + 1}</div>
              </td>
              <td className="bannertd">
                <div className="image">
                  <img src={item.img_url} alt="banner" />
                </div>
              </td>
              <td className="bannertd">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.link}
                </a>
              </td>
              <td className="bannertd">
                <select name={`action-${item._id}`} id={`action-${item._id}`}>
                  <option value="Action">Action</option>
                  <option value="Reaction">Reaction</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewBanner;
