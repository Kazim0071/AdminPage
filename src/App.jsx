import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/layout/Layout";
import Dashboard from "./components/Dashboard";
import VatPage from "./components/vat/VatPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/vat" element={<VatPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
