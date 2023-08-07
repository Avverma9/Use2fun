import React from 'react';
import style from "./ViewVehicle.module.css";
import vehicleImg from "../../assets/icons/vehicle.png"

const ViewFrames = () => {

    const tableData = [
        { id: 1, image:vehicleImg, price: '0', level: '23',  },
        { id: 2, image:vehicleImg, price: '0', level: '23',  },
        { id: 3, image:vehicleImg, price: '0', level: '23',  },

      ];

      const renderTableRows = () => {
        return tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{<img className={style.images} src={row.image} alt='images'/>}</td>
            <td>{row.price}</td>
            <td>{row.level}</td>
            <td>{<select className='viewframe-select'>
                <option value="action">1 Day</option>
                <option value="action">2 Day</option>
                <option value="action">3 Day</option>
                <option value="action">4 Day</option>
                <option value="action">5 Day</option>
                <option value="action">6 Day</option>
                <option value="action">7 Day</option>
                </select>}</td>
            <td>{<select className='viewframe-select'>
                <option value="action">Action</option>
                <option value="update">Update</option>
                <option value="remove">Remove</option>
                </select>}</td>
          </tr>
        ));
      };

  return (
    <div className='viewframe-main'>
        <h3>View Vehicles</h3>
        <button className='add-frame-btn'>Add Vehicle</button>


        <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th> Vehicle Image</th>
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