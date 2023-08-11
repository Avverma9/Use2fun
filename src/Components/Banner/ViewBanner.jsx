import React from "react";
import './ViewBanner.css';

function ViewBanner() {
  return (
    <div className="main">
      <h3>View Banner</h3>
      <table>
        <tr>
          <th>Sr.</th>
          <th >Banner Image</th>
          <th width="10px">HyperLink</th>
          <th>Action</th>
        </tr>
        <tr>
          <td className="bannertd"><div className="num">1</div></td>
          <td  className="bannertd" ><div className="image"></div></td>
          <td  className="bannertd"></td>
          <td  className="bannertd">
            <select name="cars" id="cars">
              <option value="Action">Action</option>
              <option value="saab">Reaction</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ViewBanner;
