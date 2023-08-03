import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";


function App() {
  return (
    <Router>
      <Header />
      <div
        className="app_body p-5"
        // contain routes and side navigation
      >
        <Dashboard /> 
        
      </div>
    </Router>
  );
}

export default App;
