import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Mannageuser from "./Components/Mannageuser/Mannageuser";

function App() {
  return (
    <Router>
      <Header />
      <div className="app-body p-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<Mannageuser />} />
          <Route path="/view-user" element={<>View</>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
