import './Popup.css';
const Popup = ({ isOpen, onClose, onSave, onChange, experienceDetails }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      {/* Include new form fields for role, company name, start month, and end month */}
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={experienceDetails.role}
        onChange={(e) => onChange({ ...experienceDetails, role: e.target.value })}
      />
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={experienceDetails.companyName}
        onChange={(e) => onChange({ ...experienceDetails, companyName: e.target.value })}
      />
      <input
        type="text"
        name="startMonth"
        placeholder="Start Month"
        value={experienceDetails.startMonth}
        onChange={(e) => onChange({ ...experienceDetails, startMonth: e.target.value })}
      />
      <input
        type="text"
        name="endMonth"
        placeholder="End Month"
        value={experienceDetails.endMonth}
        onChange={(e) => onChange({ ...experienceDetails, endMonth: e.target.value })}
      />

       <button style={{ backgroundColor: 'green' }} onClick={onSave}>Submit</button>
       <button style={{ backgroundColor: 'red' }} onClick={onClose}>Close</button>
    </div>
  );
};

export default Popup;

