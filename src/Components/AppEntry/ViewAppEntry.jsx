import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import "./ViewAppEntry.css"
import { useNavigate } from 'react-router-dom';

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
          {data&& data.map((item, index) => (
            <tr key={index} className='viewappentry-row2'>
              <td>{index+1}</td>
              <td>
                <img src={item.img_url} alt='image' />
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
