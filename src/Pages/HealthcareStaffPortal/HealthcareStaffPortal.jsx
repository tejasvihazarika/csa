import React from "react";
import { useNavigate } from "react-router-dom";
import "./HealthcareStaffPortal.css";

function HealthcareStaffPortal() {
  const navigate = useNavigate();

  return (
    <div className="staff-portal">
      <h2>Healthcare Staff Portal</h2>
      <p>View your shift assignments and request changes here.</p>
      <div className="staff-options">
        <button onClick={() => navigate("/healthcare-staff/view-shifts")}>
          View Shifts
        </button>
        <button onClick={() => navigate("/healthcare-staff/request-shift-change")}>
          Request Shift Change
        </button>
      </div>
    </div>
  );
}

export default HealthcareStaffPortal;
