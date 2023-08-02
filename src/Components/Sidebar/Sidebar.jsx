import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  // const [selected,setSelected]=useState("User")

  return (
    <div className="container-sidebar">
      <div className="side_nav_header">
        <h5>Dashboard</h5>
      </div>
      <div className="side_nav_body">
        <ul>
          <li>
            <Link to="/">
              <p>dashboard</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
