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
                <div className='first-coloumn'>
                   <p>Rank</p>
                   <img src={admin} alt="Example Image" />
                   <img src={admin} alt="Example Image" />
                   <img src={admin} alt="Example Image" />
                   <img src={admin} alt="Example Image" />
                   <img src={admin} alt="Example Image" />
                   <img src={admin} alt="Example Image" />
                </div>
                <div className='second-column'>
                    <p>Agent-Id</p>
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                </div>
                <div className='third-column'>
                    <p>Prchased</p>
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                    <img src={admin} alt="Example Image" />
                </div>
            </div>
        </>
    )
}

export default Ranking
