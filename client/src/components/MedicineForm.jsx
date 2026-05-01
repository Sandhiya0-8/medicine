import React, { useState } from 'react';

function MedicineForm({ onSave, showError }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showError('Please fill out the name.');
      return;
    }
    
    onSave({ name });
    setName('');
  };

  return (
    <div className="glass-panel">
      <h2>Add New Medicine</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Medicine Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Paracetamol"
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Add Medicine
          </button>
        </div>
      </form>
    </div>
  );
}

export default MedicineForm;
