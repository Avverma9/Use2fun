import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Mannageuser from "./Components/Mannageuser/Mannageuser";

function App() {
  return (
    <div className="app">
      <Header />
      <div
        className="app_body p-5"
        // contain routes and side navigation
      >
        {/* <Dashboard /> */}
        <Mannageuser />
      </div>
    </div>
  );
}

export default App;
