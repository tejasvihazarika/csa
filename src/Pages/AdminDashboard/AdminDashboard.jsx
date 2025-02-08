import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <p>Manage workforce schedules, budgets, and inventory here.</p>
      <div className="admin-options">
        <button onClick={() => navigate("/admin-dashboard/manage-schedules")}>
          Manage Schedules
        </button>
        <button onClick={() => navigate("/admin-dashboard/view-budgets")}>
          View Budgets
        </button>
        <button onClick={() => navigate("/admin-dashboard/manage-inventory")}>
          Manage Inventory
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
