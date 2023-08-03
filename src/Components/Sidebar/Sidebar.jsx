import { Link } from "react-router-dom";
import "./Sidebar.css";
import { hostIcon, userIcon } from "../../assets";
import { useCollapse } from "react-collapsed";
import { useState } from "react";

const User = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <li
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Link>
          {" "}
          <img src={userIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Users</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/view-users">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-users">
              <p>View Users</p>
            </Link>
          </li>
          <li>
            <Link to="/top-users">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/top-users">
              <p>Top Users</p>
            </Link>
          </li>
          <li>
            <Link to="/live-user">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/live-user">
              <p>Live Users</p>
            </Link>
          </li>
          <li>
            <Link to="/user-list">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/push-message">
              <p>Users List</p>
            </Link>
          </li>
          <li>
            <Link to="/push-message">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/user-list">
              <p>Push Message</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <li>
        <Link to="/">
          {" "}
          <img src={hostIcon} alt="icon" srcset="" />
        </Link>
        <Link to="/">
          <p>Home</p>
        </Link>
      </li>
    </>
  );
};

const Sidebar = () => {
  return (
    <div className="container-sidebar">
      <div className="side_nav_header">
        <h5>Dashboard</h5>
      </div>
      <div className="side_nav_body">
        <ul>
          <Home />
          <User />
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
