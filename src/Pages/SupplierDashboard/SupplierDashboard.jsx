import React from "react";
import { useNavigate } from "react-router-dom";
import "./SupplierDashboard.css";

function SupplierDashboard() {
  const navigate = useNavigate();

  return (
    <div className="supplier-dashboard">
      <h2>Supplier Dashboard</h2>
      <p>Monitor inventory and manage supplies efficiently.</p>
      <div className="supplier-options">
        <button onClick={() => navigate("/supplier-dashboard/monitor-inventory")}>
          Monitor Inventory
        </button>
        <button onClick={() => navigate("/supplier-dashboard/manage-supplies")}>
          Manage Supplies
        </button>
      </div>
    </div>
  );
}

export default SupplierDashboard;
