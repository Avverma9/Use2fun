import React, { useState } from 'react';
import "./Recharge/DiamondAccount.css"
import RechargeDashboard from './Recharge/RechargeDashboard';
import AgencyBalance from './AgencyBalance/AgencyBalance';
import agent from '../../assets/icons/rankingImg.png';
import { useLocation, useNavigate } from 'react-router-dom';
import AgentCenter from './AgentCenter/AgentCenter';

const AgentPanel = () => {
  const [activeMenu, setActiveMenu] = useState("recharge"); 
  const location = useLocation(); 
  const navigate = useNavigate();

  const AgentloginData = location.state;

  if (!AgentloginData) {
    navigate("/agent/login");
    return null;
  }

  localStorage.setItem("AgentLoginData", JSON.stringify(AgentloginData.data)); 
  console.log(AgentloginData.data);

  const Data = localStorage.getItem("AgentLoginData");
  const parsedData = JSON.parse(Data);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleLogout = () => {
    localStorage.setItem("AgentSignIn",false);
    localStorage.removeItem("AgentLoginData");
    navigate("/agent/login");
  };

  return (
    <div>
      <div className='main-cont'>
        <div className='heading-part'>
          <div className='image-short'>
            <img src="https://i.gifer.com/IPNp.gif" alt="" />
          </div>
          <div className='phone'>
            <p className='no'>{parsedData.userId}</p>
            <p className='blnc'>my agent balance: {parsedData.totalCoins}</p>
          </div>
          <div className='button-logout'>
            <button className='logout' onClick={handleLogout}>Logout</button>
          </div>
        </div>
        <div className='img-agent'><img src={agent} alt='image'/></div>
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
        {activeMenu === "recharge" && <RechargeDashboard coinseller={parsedData._id}/>}
        {activeMenu === "balance" && <AgencyBalance />}
        {activeMenu === "center" && <AgentCenter/>}
        
      </div>
    </div>
  );
};

export default AgentPanel;
