import React from 'react'
import styles from "./AppEntry.module.css"

const AppEntry = () => {
  return (
    <div>
        <h2>AppEntry</h2>
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

export default AppEntry