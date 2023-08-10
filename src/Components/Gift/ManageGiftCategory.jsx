import React from "react";


function ManageGiftcategory() {
  return (
    <div id="gift_main">
      <div className="gift_header">
        <h3>Manage Gift Category</h3>
        <button className="gift_btn">Add Gift Category</button>
      </div>

      <table className="gift_table">
        <tr>
          <th>Sr.</th>
          <th> Title</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Emoji</td>
          <td>Approved</td>
          <td>
            <select >
              <option value="Action">Action</option>
              <option value="saab">Reaction</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Luv</td>
          <td>Pending</td>
          <td>
            <select >
              <option value="Action">Action</option>
              <option value="saab">Reaction</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Countries</td>
          <td>Approved</td>
          <td>
            <select >
              <option value="Action">Action</option>
              <option value="saab">Reaction</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Lucky</td>
          <td>Approved</td>
          <td>
            <select >
              <option value="Action">Action</option>
              <option value="saab">Reaction</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>VIP</td>
          <td>Approved</td>
          <td>
            <select >
              <option value="Action">Action</option>
              <option value="saab">Reaction</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ManageGiftcategory;
