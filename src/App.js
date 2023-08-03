import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Mannageuser from "./Components/Mannageuser/Mannageuser";
import Sidebar from "./Components/Sidebar/Sidebar";
import SignIn from "./Components/SignIn/SignIn";
import SignOut from "./Components/SignOut.jsx/Signout";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Sidebar />
        <div
          className="app_body p-5"
         
        >
          <Routes>
          <Route path="/signout" element={<SignOut/>}/>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<Mannageuser />} />
            <Route path="/view-user" element={<>View</>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;