import AddAdmin from "./Components/Admin/AddAdmin";
import ManageAdmin from "./Components/Admin/ManageAdmin";
import AddSubAdmin from "./Components/Admin/SubAdmin/AddSubAdmin";
import AddAgency from "./Components/Agency/AddAgency";
import ViewAgency from "./Components/Agency/ViewAgency";
import ManageSubAdmin from "./Components/Admin/SubAdmin/ManageSubAdmin"
import AppEntry from "./Components/AppEntry/AppEntry";
import ViewAppEntry from "./Components/AppEntry/ViewAppEntry";
import AddRoomWallpaper from "./Components/RoomWallpaper/AddRoomWallpaper";


function App() {
  return (
    <div className="app">
      {/* <AddAgency/>
      <ViewAgency/>
      <ManageAdmin/>
      <AddAdmin/>
      <AddSubAdmin/>
      <ManageSubAdmin/>
      <AppEntry/>
      <ViewAppEntry/> */}
      <AddRoomWallpaper/>
    </div>
  );
}

export default App;
