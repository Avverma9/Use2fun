import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { hostIcon, userIcon } from "../../assets";
// import hostIcon from "../../assets/icons/host.png"
import agencyIcon from "../../assets/icons/agency.png";
import adminIcon from "../../assets/icons/admin.png";
import subAdminIcon from "../../assets/icons/subadmin.png";
import appEntryIcon from "../../assets/icons/appentey.png";
import roomWallpaperIcon from "../../assets/icons/coinHistory.png";
import framesIcon from "../../assets/icons/frames.png";
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
            <Link to="/live-users">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/live-users">
              <p>Live Users</p>
            </Link>
          </li>
          <li>
            <Link to="/users-list">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/users-list">
              <p>Users List</p>
            </Link>
          </li>
          <li>
            <Link to="/push-message">
              {" "}
              <img src={userIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/push-message">
              <p>Push Message</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//Host
const Host = () => {
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
          <img src={hostIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Host</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/pending-host-request">
              {" "}
              <img src={hostIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/pending-host-request">
              <p>Pending Host Request</p>
            </Link>
          </li>
          <li>
            <Link to="/approved-host-request">
              {" "}
              <img src={hostIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/approved-host-request">
              <p>Approved Host Request</p>
            </Link>
          </li>
          <li>
            <Link to="/rejected-host-request">
              {" "}
              <img src={hostIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/rejected-host-request">
              <p>Rejected Host Request</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//Agency
const Agency = () => {
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
          <img src={agencyIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Manage Agency</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/add-agency">
              {" "}
              <img src={agencyIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-agency">
              <p>Add Agency</p>
            </Link>
          </li>
          <li>
            <Link to="/view-agency">
              {" "}
              <img src={agencyIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-agency">
              <p>View Agency</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//Admin
const Admin = () => {
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
          <img src={adminIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Admin</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/add-admin">
              {" "}
              <img src={adminIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-admin">
              <p>Add Admin</p>
            </Link>
          </li>
          <li>
            <Link to="/view-admin">
              {" "}
              <img src={adminIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-admin">
              <p>View Admin</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//SubAdmin
const SubAdmin = () => {
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
          <img src={subAdminIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Sub Admin</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/add-subadmin">
              {" "}
              <img src={subAdminIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-subadmin">
              <p>Add Admin</p>
            </Link>
          </li>
          <li>
            <Link to="/view-subadmin">
              {" "}
              <img src={subAdminIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-subadmin">
              <p>View Admin</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//AppEntry
const AppEntry = () => {
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
          <img src={appEntryIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>App Entry</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/add-appentry">
              {" "}
              <img src={appEntryIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-appentry">
              <p>Add App Entry</p>
            </Link>
          </li>
          <li>
            <Link to="/view-appentry">
              {" "}
              <img src={appEntryIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-appentry">
              <p>View App Entry</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//RoomWallpaper
const RoomWallpaper = () => {
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
          <img src={roomWallpaperIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Room Wallpaper</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/add-room-wallpaper">
              {" "}
              <img src={roomWallpaperIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-room-wallpaper">
              <p>Add Room Wallpaper</p>
            </Link>
          </li>
          <li>
            <Link to="/view-room-wallpaper">
              {" "}
              <img src={roomWallpaperIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-room-wallpaper">
              <p>View Room Wallpaper</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

//Frames
const Frames = () => {
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
          <img src={framesIcon} alt="icon" srcset="" />
        </Link>
        <Link>
          <p>Frames</p>
        </Link>
      </li>
      <div {...getCollapseProps()}>
        <ul>
          <li>
            <Link to="/add-frames">
              {" "}
              <img src={framesIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/add-frames">
              <p>Add Frames</p>
            </Link>
          </li>
          <li>
            <Link to="/view-frames">
              {" "}
              <img src={framesIcon} alt="icon" srcset="" />
            </Link>
            <Link to="/view-frames">
              <p>View Frames</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

// const Home = () => {
//   return (
//     <>
//       <li>
//         <Link to="/">
//           {" "}
//           <img src={hostIcon} alt="icon" srcset="" />
//         </Link>
//         <Link to="/">
//           <p>Home</p>
//         </Link>
//       </li>
//     </>
//   );
// };

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="container-sidebar">
      <div className="side_nav_header" onClick={() => navigate("/")}>
        <h5>Dashboard</h5>
      </div>
      <div className="side_nav_body">
        <ul>
          {/* <Home /> */}
          <User />
          <Host />
          <Agency />
          <Admin />
          <SubAdmin />
          <AppEntry />
          <RoomWallpaper />
          <Frames />
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
