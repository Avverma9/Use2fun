import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  
  return (
    <div className="container-sidebar">
      <div className="side_nav_header">
        
      <Link to="/">
              <h5 >DASHBOARD</h5>
            </Link>
      </div>
      <div className="side_nav_body">
        <ul>
          
          <li>
            <Link to="/user">
              <p>User</p>
            </Link>
          </li>
          <li>
            <Link to="/signout">
              <p>Signout</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;