import Dashboard from "./components/Dashboard";
import SideBAr from "./components/SideBAr";

function App() {
  return (
    <>
      <div className="flex h-[100vh]">
        <SideBAr />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
