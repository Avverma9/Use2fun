import React from 'react';
import './ViewSvip.css';

function ViewSvip() {
  return (
    <div>
        <div id="vip_main">
      <div className="vip_header">
        <h3>View Svip</h3>
        <button className="vip_btn">Add Svip</button>
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
        <tr>
          <td className="price">
            <div className="num">1</div>
          </td>
          <td className="price">
            <div className="vip_img"></div>
          </td>
          <td className="price">6589</td>
          <td className="price">25</td>
          <td className="price">23</td>
          <td className="price">
            {" "}
            <select name="cars" id="cars">
              <option value="volvo">Action</option>
              <option value="saab">Reaction</option>
            </select>{" "}
          </td>
        </tr>
        <tr>
          <td className="price">
            <div className="num">2</div>
          </td>
          <td className="price">
            <div className="vip_img"></div>
          </td>
          <td className="price">6589</td>
          <td className="price">25</td>
          <td className="price">23</td>
          <td className="price">
            <select name="cars" id="cars">
              <option value="volvo">Action</option>
              <option value="saab">Reaction</option>
            </select>
          </td>
        </tr>
        <tr>
          <td className="price">
            <div className="num">3</div>
          </td>
          <td className="price">
            <div className="vip_img"></div>
          </td>
          <td className="price">6589</td>
          <td className="price">25</td>
          <td className="price">23</td>
          <td className="price">
            <select name="cars" id="cars">
              <option value="volvo">Action</option>
              <option value="saab">Reaction</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
    </div>
  )
}

export default ViewSvip