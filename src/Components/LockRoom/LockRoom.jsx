import React, { useState, useEffect } from 'react';
import './LockRoom.css';
import { AiOutlineUpload } from 'react-icons/ai';

const LockRoom = () => {
  const [lockRoomData, setLockRoomData] = useState([]);
  const [editedRoom, setEditedRoom] = useState(null);
  const [imageToUpload, setImageToUpload] = useState(null);

  useEffect(() => {
    fetchLockRoomData();
  }, []);

  const fetchLockRoomData = async () => {
    try {
      const response = await fetch('https://use2fun.onrender.com/admin/lockRoom/get');
      if (response.ok) {
        const responseData = await response.json();
        setLockRoomData(responseData.data);
        if (responseData.data.length > 0) {
          const firstRoom = responseData.data[0];
          const initialEditedRoom = {
            ...firstRoom,
            images: firstRoom.images[0] || '',
          };
          setEditedRoom(initialEditedRoom);
        }
      } else {
        console.error('Failed to fetch lock room data. Response:', response);
      }
    } catch (error) {
      console.error('Error fetching lock room data:', error);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {

    const formDataToSend = new FormData();

    


    try {
      if (editedRoom) {
        const response = await fetch(`https://use2fun.onrender.com/admin/lockRoom/update/${editedRoom._id}`, {
          method: 'PUT',
          body: JSON.stringify({
            price: editedRoom.price,
            day: editedRoom.day,
            images: [editedRoom.images],
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          console.log(`Lock room ${editedRoom._id} updated successfully.`);
        } else {
          console.error(`Failed to update lock room ${editedRoom._id}. Response:`, response);
        }
      }
    } catch (error) {
      console.error('Error updating lock room:', error);
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'lockroom') {
      if (files.length > 0) {
        setEditedRoom((prevRoom) => ({
          ...prevRoom,
          images: files[0].name, 
        }));
      }
    }
  };

  return (
    <div>
      <h2>Lock Room</h2>
      {editedRoom && (
        <div className='lock-room'>
          <p>Lock Room id</p>
          <div>
            <img className='lockImg' src={editedRoom.images} alt='' />
          </div>
          <div className='flexdiv'>
            <p>
              Price{' '}
              <input
                type='number'
                value={editedRoom.price}
                name='price'
                onChange={handleEditChange}
              />
            </p>
            <p>
              Validity{' '}
              <input
                type='number'
                value={editedRoom.day}
                name='day'
                onChange={handleEditChange}
              />
            </p>
          </div>
          <input
            type='file'
            className='uploadbtn'
            onChange={handleFileChange}
            accept='image/*'
          />
        </div>
      )}
      <button className='cancel-btn-a'>CANCEL</button>
      <button className='submit-btn-b' onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default LockRoom;
