import React from 'react';
import "./AddRoomWallpaper.css";

const AddRoomWallpaper = () => {
  return (
    <div className='addroom'>
    <h2>Room Wallpaper</h2>
    <form className="container-addroom">
       <label>Images*</label>
       <input type="file" name="" id="" />
       <label>Price*(If free price will be zero(0))</label>
       <input type="number" name="" id="" />

       <div className="btn">
        <button className='cancel-button'>Cancel</button>
        <button className='submit-button'>Submit</button>
       </div>
    </form>
</div>
  )
}

export default AddRoomWallpaper