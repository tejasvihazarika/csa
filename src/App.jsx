import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HealthcareStaffPortal from "./Pages/HealthcareStaffPortal/HealthcareStaffPortal";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import SupplierDashboard from "./Pages/SupplierDashboard/SupplierDashboard";
import ViewShifts from "./Pages/HealthcareStaffPortal/ViewShifts";
import RequestShiftChange from "./Pages/HealthcareStaffPortal/RequestShiftChange";
import ManageSchedules from "./Pages/AdminDashboard/ManageSchedules";
import ViewBudgets from "./Pages/AdminDashboard/ViewBudgets";
import ManageInventory from "./Pages/AdminDashboard/ManageInventory";
import MonitorInventory from "./Pages/SupplierDashboard/MonitorInventory";
import ManageSupplies from "./Pages/SupplierDashboard/ManageSupplies";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Dashboards */}
        <Route path="/healthcare-staff" element={<HealthcareStaffPortal />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
        
        {/* Healthcare Staff Routes */}
        <Route path="/healthcare-staff/view-shifts" element={<ViewShifts />} />
        <Route path="/healthcare-staff/request-shift-change" element={<RequestShiftChange />} />
        
        {/* Admin Dashboard Routes */}
        <Route path="/admin-dashboard/manage-schedules" element={<ManageSchedules />} />
        <Route path="/admin-dashboard/view-budgets" element={<ViewBudgets />} />
        <Route path="/admin-dashboard/manage-inventory" element={<ManageInventory />} />
        
        {/* Supplier Dashboard Routes */}
        <Route path="/supplier-dashboard/monitor-inventory" element={<MonitorInventory />} />
        <Route path="/supplier-dashboard/manage-supplies" element={<ManageSupplies />} />
      </Routes>
    </Router>
  );
}

export default App;
