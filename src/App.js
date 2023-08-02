import AddAdmin from "./Components/Admin/AddAdmin";
import ManageAdmin from "./Components/Admin/ManageAdmin";
import AddSubAdmin from "./Components/Admin/SubAdmin/AddSubAdmin";
import AddAgency from "./Components/Agency/AddAgency";
import ViewAgency from "./Components/Agency/ViewAgency";
import ManageSubAdmin from "./Components/Admin/SubAdmin/ManageSubAdmin"


function App() {
  return (
    <div className="app">
      {/* <AddAgency/> */}
      {/* <ViewAgency/> */}
      {/* <ManageAdmin/> */}
      {/* <AddAdmin/> */}
      {/* <AddSubAdmin/> */}
      <ManageSubAdmin/>
    </div>
  );
}

export default App;
