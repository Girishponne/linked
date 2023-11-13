import React from 'react';
import './Educationpopup.css';

const Popup = ({ isOpen, onClose, onSave, onChange, details }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <input
        type="text"
        name="collegeName"
        placeholder="College Name"
        value={details.collegeName}
        onChange={(e) => onChange({ ...details, collegeName: e.target.value })}
      />
      <input
        type="text"
        name="branch"
        placeholder="Branch"
        value={details.branch}
        onChange={(e) => onChange({ ...details, branch: e.target.value })}
      />
      <input
        type="text"
        name="startYear"
        placeholder="Start Year"
        value={details.startYear}
        onChange={(e) => onChange({ ...details, startYear: e.target.value })}
      />
      <input
        type="text"
        name="endYear"
        placeholder="End Year"
        value={details.endYear}
        onChange={(e) => onChange({ ...details, endYear: e.target.value })}
      />

      <button style={{backgroundColor:'green'}} onClick={onSave}>Save</button>
      <button style={{backgroundColor:'red'}} onClick={onClose}>Close</button>
    </div>
  );
};

export default Popup;
