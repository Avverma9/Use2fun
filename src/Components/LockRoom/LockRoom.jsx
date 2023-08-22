import React, { useState, useEffect } from 'react';
import './LockRoom.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          setEditedRoom(firstRoom); 
        }
      } else {
        console.error('Failed to fetch lock room data. Response:', response);
      }
    } catch (error) {
      console.error('Error fetching lock room data:', error);
    }
  };

  const handleEdit = (item) => {
    setEditedRoom(item);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setEditedRoom((prevRoom) => ({
      ...prevRoom,
      price: newPrice,
    }));
  };

  const handleDayChange = (e) => {
    const newDay = e.target.value;
    setEditedRoom((prevRoom) => ({
      ...prevRoom,
      day: newDay,
    }));
  };

  const handleSubmit = async () => {
    if (!editedRoom) {
      return; 
    }

    const formDataToSend = new FormData();
    formDataToSend.append('price', editedRoom.price);
    formDataToSend.append('day', editedRoom.day);

    if (editedRoom.newImage) {
      formDataToSend.append('images', editedRoom.newImage);
    }

    try {
      const response = await fetch(`https://use2fun.onrender.com/admin/lockRoom/update/${editedRoom._id}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (response.ok) {
        console.log(`Lock room ${editedRoom._id} updated successfully.`);
        toast.success("Data Updated")
        
        fetchLockRoomData();
      } else {
        console.error(`Failed to update lock room ${editedRoom._id}. Response:`, response);
        toast.error("Failed to update Data")
      }
    } catch (error) {
      console.error('Error updating lock room:', error);
      toast.error(`Failed to update ${error}`)
    }
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const newImage = files[0];
      setEditedRoom((prevRoom) => ({
        ...prevRoom,
        newImage,
      }));
    }
  };

  return (
    <div>
      <h2>Lock Room</h2>
      {editedRoom && (
        <div className='lock-room'>
          <p>Lock Room id</p>
          <div>
            <img className='lockImg' src={editedRoom.images[0]} alt='' />
          </div>
          <div className='flexdiv'>
            <p>
              Price{' '}
              <input
                type='number'
                value={editedRoom.price}
                name='price'
                onChange={handlePriceChange}
              />
            </p>
            <p>
              Validity{' '}
              <input
                type='number'
                value={editedRoom.day}
                name='day'
                onChange={handleDayChange}
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
