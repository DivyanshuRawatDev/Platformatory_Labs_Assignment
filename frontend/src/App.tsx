import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Auth from "./pages/Auth";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/google" replace />} />
        <Route path="/google" element={<Auth />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default App;
