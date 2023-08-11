import React from 'react';
import "./ViewAppEntry.css"

const ViewAppEntry = () => {
  const tableData = [
    {
      id: 1,
      image: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
    },
    {
      id: 2,
      image: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
    },
  ];

  return (
    <div className='viewappentry'>
      <h2>ViewAppEntry</h2>
      <table>
        <thead>
          <tr className='viewappentry-row1'>
            <th>Sr.</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index} className='viewappentry-row2'>
              <td>{item.id}</td>
              <td>
                <img src={item.image} alt='image' />
              </td>
              <td>
                <select className="selectbar">
                  <option value="action">Action</option>
                  <option value="update">Update</option>
                  <option value="remove">Remove</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAppEntry;