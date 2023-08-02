import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div
        className="app_body p-5"
        // contain routes and side navigation
      >
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
