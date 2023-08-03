import React from 'react'
import styles from "./AddRoomWallpaper.module.css"

const AddRoomWallpaper = () => {
  return (
    <div>
    <h2>Room Wallpaper</h2>
    <form className={styles.container}>
       <label>Images*</label>
       <input type="file" name="" id="" />
       <div className="btn">
        <button>Cancel</button>
        <button>Submit</button>
       </div>
    </form>
</div>
  )
}

export default AddRoomWallpaper