import React, { useState, useEffect } from "react";
import './ViewBanner.css';

function ViewBanner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsedata = await fetch("https://use2fun.onrender.com/admin/banner/getall");
        if (!responsedata.ok) {
          throw new Error("Network issue");
        }
        const response = await responsedata.json();
        setBanner(response.data);
      } catch (error) {
        console.error("fetching problem", error)
      }
    }
    fetchData();
  }, []);

  return (
    <div className="main">
      <h3>View Banner</h3>
      {banner.length > 0 ? (
        <table className="banner-table">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Banner Image</th>
              <th width="10px">HyperLink</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {banner.map((item, index) => (
              <tr key={index}>
                <td className="banner-data">{index + 1}</td>
                <td className="banner-data"><img src={item.images} alt='image' /></td>
                <td className="bannner-data">{item.link}</td>
                <td>
                  <select className='viewbanner'>
                    <option value="action">Action</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No banner data available.</p>
      )}
    </div>
  );
}

export default ViewBanner;
