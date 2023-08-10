import React from 'react'

function AddSvip() {
  return (
    <div  className="Vip_main">
        <h3>Add  Svip</h3>
      <div className="innerdiv">
        <label htmlFor="">Image*</label> <br />
        <div className="input">
          <input type="file" name="" id="" />
        </div>
      </div>
      <div className="innerdiv">
        <label htmlFor="">Thumbnail* (MP4)</label>
        <br />
        <div className="input">
          <input type="file" name="" id="" />
        </div>
      </div>
      <div className="innerdiv">
        <label htmlFor="">Level*</label> <br />
        <input className="input" type="text" name="" id="" placeholder="Level" />
      </div>
      <div className="innerdiv">
        <label htmlFor="">Price*</label> <br />
        <input className="input" type="text" name="" id="" placeholder="Price" />
      </div>
      <div className="innerdiv">
        <label htmlFor="">Validity* (days)*</label> <br />
        <input className="input" type="text" name="" id=""  placeholder="Validity"/>
      </div>
      <div className='Button_div'>
            <button className='btn btn1'>Cancel</button>
            <button className='btn btn2'>Submit</button>
        </div>
    </div>
  )
}

export default AddSvip