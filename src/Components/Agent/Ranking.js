import React from 'react'
import admin from '../../assets/icons/admin.png';
import './Ranking.css';
function Ranking() {
    return (
        <>
            <div className='all-data'>
                <div className='first-head'>
                    <div className='heading-pro'><p>Ranking</p></div>
                    <div className='below-head'><p>Statistics Based on the diamond purchase</p></div>
                </div>
                <div className='columns'>
                <div className='first-coloumn'>
                   <p>Rank</p>
                   <div className='ans'>
                   <img src={admin} alt="Example Image" />
                   <img src={admin} alt="Example Image" />
                   <img src={admin} alt="Example Image" />
                   <img src={admin} alt="Example Image" />
                   <img src={admin} alt="Example Image" />
                   <img src={admin} alt="Example Image" />
                   </div>
                </div>
                <div className='second-column'>
                    <p>Agent-Id</p>
                    <div className='ans'>
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    </div>
                </div>
                <div className='third-column'>
                    <p>Prchased</p>
                    <div className='ans'>
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Ranking
