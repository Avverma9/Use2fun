import React from 'react';
import style from "./ViewFrames.css";

const ViewFrames = () => {

    const tableData = [
        { id: 1, agencyName: 'Agency 1', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", price: '0', level: '23', validity:"23" },
        { id: 2, agencyName: 'Agency 2', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", price: '0', level: '23', validity:"23" },
        { id: 3, agencyName: 'Agency 1', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", price: '0', level: '23', validity:"23" },
        { id: 4, agencyName: 'Agency 2', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", price: '0', level: '23', validity:"23"  },
        { id: 5, agencyName: 'Agency 1', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", price: '0', level: '23', validity:"23" },
        { id: 6, agencyName: 'Agency 2', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", price: '0', level: '23', validity:"23" },

      ];

      const renderTableRows = () => {
        return tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{<img className={style.images} src={row.image} alt='images'/>}</td>
            <td>{row.price}</td>
            <td>{row.level}</td>
            <td>{row.validity}</td>
            <td>{<select className='viewframe-select'>
                <option value="action">Action</option>
                </select>}</td>
          </tr>
        ));
      };

  return (
    <div className='viewframe-main'>
        <h3>View Frames</h3>
        <button className='add-frame-btn'>Add Frame</button>


        <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th> Frame Image</th>
            <th>Price</th>
            <th>Level</th>
            <th>Validity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>


    </div>
  )
}

export default ViewFrames