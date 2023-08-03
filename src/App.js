import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Mannageuser from "./Components/Mannageuser/Mannageuser";
import Viewuser from "./Components/Viewuser/Viewuser";
import Sidebar from "./Components/Sidebar/Sidebar";
import Edituser from "./Components/Edituser/Edituser";
import Receivedgifts from "./Components/Receivedgifts/Receivedgifts";
import Sendgifts from "./Components/Sendgifts/Sendgifts";
import Coinhistory from "./Components/Coinhistory/Coinhistory";
import Liveuserhistory from "./Components/Liveuserhistory/Liveuserhistory";
import Topusers from "./Components/Topusers/Topusers";

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
            <Route path="/view-user" element={<Viewuser />} />
            <Route path="/edit-user" element={<Edituser />} />
            <Route path="/recieved-gift-history" element={<Receivedgifts />} />
            <Route path="/send-gift-history" element={<Sendgifts />} />
            <Route
              path="/mannage-purchased-coin-history"
              element={<Coinhistory />}
            />
            <Route
              path="/mannage-live-user-history"
              element={<Liveuserhistory />}
            />
            <Route
              path="/top-users"
              element={<Topusers />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
