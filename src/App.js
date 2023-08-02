import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Mannageuser from "./Components/Mannageuser/Mannageuser";
import Sidebar from "./Components/Sidebar/Sidebar";

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
            <Route path="/user" element={<Mannageuser />} />
            <Route path="/view-user" element={<>View</>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
