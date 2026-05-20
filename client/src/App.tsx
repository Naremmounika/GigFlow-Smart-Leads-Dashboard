import { Routes, Route } from "react-router-dom";
import SidebarLayout from "./layout/SidebarLayout";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}