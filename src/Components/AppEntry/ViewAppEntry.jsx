import React from 'react';
import style from "./ViewAppEntry.module.css"

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
    <div>
      <h2>ViewAppEntry</h2>
      <table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>
                <img src={item.image} alt='image' />
              </td>
              <td>
                <select className={style.selectbar}>
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