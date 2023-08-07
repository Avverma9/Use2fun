import React from "react";
import './managegift.css';

function ManageGift() {
  return (
    <div>
      <div id="gift_main">
        <div className="gift_header">
          <h3>Manage Gift </h3>
          <button className="gift_btn">Add Gift Category</button>
        </div>

        <table className="gift_table">
          <tr>
            <th>Sr.</th>
            <th> Title</th>
            <th>Image</th>
            <th>Thumbnail</th>
            <th>Coin</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>couple Ring</td>
            <td></td>
            <td></td>
            <td></td>
            <td>Approved</td>
            <td>
              <select>
                <option value="Action">Action</option>
                <option value="saab">Reaction</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Petal</td>
            <td>Pending</td>
            <td></td>
            <td></td>
            <td>Approved</td>
            <td>
              <select>
                <option value="Action">Action</option>
                <option value="saab">Reaction</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Money</td>
            <td>Approved</td>
            <td></td>
            <td></td>
            <td>Approved</td>
            <td>
              <select>
                <option value="Action">Action</option>
                <option value="saab">Reaction</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Tomato</td>
            <td>Approved</td>
            <td></td>
            <td></td>
            <td>Approved</td>
            <td>
              <select>
                <option value="Action">Action</option>
                <option value="saab">Reaction</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Love Car</td>
            <td>Approved</td>
            <td></td>
            <td></td>
            <td>Approved</td>
            <td>
              <select>
                <option value="Action">Action</option>
                <option value="saab">Reaction</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Fireworks</td>
            <td>Approved</td>
            <td></td>
            <td></td>
            <td>Approved</td>
            <td>
              <select>
                <option value="Action">Action</option>
                <option value="saab">Reaction</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Beast</td>
            <td>Approved</td>
            <td></td>
            <td></td>
            <td>Approved</td>
            <td><select >
              <option value="Action">Action</option>
              <option value="saab">Reaction</option>
            </select></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ManageGift;
