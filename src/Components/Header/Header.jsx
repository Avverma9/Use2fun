import React from "react";
import "./Header.css";
import {IoIosNotifications} from 'react-icons/io';

const Header = () => {
  return (
    
    <nav className="navbar bg-body-tertiary header py-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-white">
          Usefuns Admin Panel
        </span>
        <div className="notification">
        <IoIosNotifications className="bell-icon"/>
        </div>
        
      </div>
    </nav>
    
  );
};

export default Header;
