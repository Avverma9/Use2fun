import React from 'react'
import style from "./ViewRoomWallpaper.module.css"

const ViewRoomWallpaper = () => {

    const tableData = [
        { id: 1, agencyName: 'Agency 1', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", price: '0', duration: '1 Week' },
        { id: 2, agencyName: 'Agency 2', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", price: '0', duration: '1 Week'  },
        { id: 3, agencyName: 'Agency 1', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", price: '0', duration: '1 Week' },
        { id: 4, agencyName: 'Agency 2', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", price: '0', duration: '1 Week'  },
        { id: 5, agencyName: 'Agency 1', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", price: '0', duration: '1 Week' },
        { id: 6, agencyName: 'Agency 2', image:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", price: '0', duration: '1 Week'  },

      ];

      const renderTableRows = () => {
        return tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{<img className={style.images} src={row.image} alt='images'/>}</td>
            <td>{row.price}</td>
            <td>{row.duration}</td>
            <td>{<select>
                <option value="action">Action</option>
                </select>}</td>
          </tr>
        ));
      };

  return (
    <div>
        <h3>ViewRoomWallpaper</h3>
        <button>Add App Entry</button>

        <table className={style.table}>
        <thead>
          <tr>
            <th>Sr.</th>
            <th> Frame Image</th>
            <th>Price</th>
            <th>Dueation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>


    </div>
  )
}

export default ViewRoomWallpaper