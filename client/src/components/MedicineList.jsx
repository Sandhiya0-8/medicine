import React from 'react';

function MedicineList({ medicines }) {
  if (!medicines || medicines.length === 0) {
    return (
      <div className="glass-panel" style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>No medicines in inventory yet. Add a medicine above.</p>
      </div>
    );
  }

  return (
    <div className="glass-panel table-container">
      <h2>Medicines</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((med) => {
            return (
              <tr key={med._id}>
                <td>{med.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MedicineList;
