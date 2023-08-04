import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Mannageuser from "./Components/Mannageuser/Mannageuser";
import Sidebar from "./Components/Sidebar/Sidebar";
import AddAgency from "./Components/Agency/AddAgency"
import ViewAgency from "./Components/Agency/ViewAgency"
import AddAdmin from "./Components/Admin/AddAdmin"
import ViewAdmin from "./Components/Admin/ViewAdmin"
import AddSubAdmin from "./Components/Admin/SubAdmin/AddSubAdmin"
import ViewSubAdmin from "./Components/Admin/SubAdmin/ViewSubAdmin"
import AddAppEntry from "./Components/AppEntry/AddAppEntry"
import ViewAppEntry from "./Components/AppEntry/ViewAppEntry"
import AddRoomWallpaper from "./Components/RoomWallpaper/AddRoomWallpaper"
import ViewRoomWallpaper from "./Components/RoomWallpaper/ViewRoomWallpaper"
import PendingHost from "./Components/Host/PendingHost"
import ApprovedHost from "./Components/Host/ApprovedHost"
import RejectedHost from "./Components/Host/RejectedHost"
import ViewHostInfo from "./Components/Host/ViewHostInfo"
import AddFrames from "./Components/Frames/AddFrames"
import ViewFrames from "./Components/Frames/ViewFrames"
import UserProfile from "./Components/Account/UserProfile";
import ChangePassword from "./Components/Account/ChangePassword";


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Sidebar />
        <div
          className="app_body p-5"
          // contain routes and side navigation
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/view-users" element={<Mannageuser />} />
            <Route path="/view-user" element={<>View</>} />
            <Route path="/add-agency" element={<AddAgency/>} />
            <Route path="/view-agency" element={<ViewAgency/>} />
            <Route path="/add-admin" element={<AddAdmin/>} />
            <Route path="/view-admin" element={<ViewAdmin/>} />
            <Route path="/add-subadmin" element={<AddSubAdmin/>} />
            <Route path="/view-subadmin" element={<ViewSubAdmin/>} />
            <Route path="/add-appentry" element={<AddAppEntry/>} />
            <Route path="/view-appentry" element={<ViewAppEntry/>} />
            <Route path="/add-room-wallpaper" element={<AddRoomWallpaper/>} />
            <Route path="/view-room-wallpaper" element={<ViewRoomWallpaper/>}/>
            <Route path="/pending-host-request" element={<PendingHost/>}/>
            <Route path="/approved-host-request" element={<ApprovedHost/>}/>
            <Route path="/rejected-host-request" element={<RejectedHost/>}/>
            <Route path="/view-host-info" element={<ViewHostInfo/>}/>
            <Route path="/add-frames" element={<AddFrames/>}/>
            <Route path="/view-frames" element={<ViewFrames/>}/>
            <Route path="/user-profile" element={<UserProfile/>}/>
            <Route path="/change-password" element={<ChangePassword/>}/> 
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
