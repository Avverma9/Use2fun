import React, { useState } from 'react';
import "./Recharge/RechargeDashboard.css";
import RechargeDashboard from './Recharge/RechargeDashboard';

const AgentPanel = () => {
  const [activeMenu, setActiveMenu] = useState("recharge"); 

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div>
      <div className='main-cont'>
        <div className='heading-part'>
          <div className='image-short'>
            <img src="https://i.gifer.com/IPNp.gif" alt="" />
          </div>
          <div className='phone'>
            <p className='no'>6375360267</p>
            <p className='blnc'>my agent balance:500$</p>
          </div>
          <div className='button-logout'>
            <button className='logout'>Logout</button>
          </div>
        </div>
        <div className='middle-center'>
          <p
            className={activeMenu === "recharge" ? "active-menu" : ""}
            onClick={() => handleMenuClick("recharge")}
          >
            Recharge To
          </p>
          <p
            className={activeMenu === "balance" ? "active-menu" : ""}
            onClick={() => handleMenuClick("balance")}
          >
            My Agent Balance
          </p>
          <p
            className={activeMenu === "center" ? "active-menu" : ""}
            onClick={() => handleMenuClick("center")}
          >
            Agent Center
          </p>
        </div>
      </div>
      <div>
        {activeMenu === "recharge" && <RechargeDashboard />}
        
      </div>
    </div>
  );
};

export default AgentPanel;
