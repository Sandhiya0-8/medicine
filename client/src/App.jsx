import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MedicineForm from './components/MedicineForm';
import MedicineList from './components/MedicineList';

const API_URL = 'http://localhost:5000/api/medicines';

function App() {
  const [medicines, setMedicines] = useState([]);
  const [status, setStatus] = useState({ message: '', type: '' });

  const fetchMedicines = async () => {
    try {
      const response = await axios.get(API_URL);
      setMedicines(response.data);
    } catch (error) {
      showStatus('Failed to load inventory', 'error');
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  const showStatus = (message, type) => {
    setStatus({ message, type });
    setTimeout(() => {
      setStatus({ message: '', type: '' });
    }, 3000);
  };

  const handleSaveMedicine = async (medicineData) => {
    try {
      await axios.post(API_URL, {
        name: medicineData.name
      });
      showStatus('Medicine added successfully!', 'success');
      fetchMedicines();
    } catch (error) {
      showStatus(error.response?.data?.message || 'Error saving medicine', 'error');
    }
  };

  return (
    <div className="container">
      <h1>Medicine Management</h1>
      
      {status.message && (
        <div className={`status-msg ${status.type}`}>
          {status.message}
        </div>
      )}

      <MedicineForm 
        onSave={handleSaveMedicine} 
        showError={(msg) => showStatus(msg, 'error')}
        showSuccess={(msg) => showStatus(msg, 'success')}
      />
      
      <MedicineList 
        medicines={medicines}
      />
    </div>
  );
}

export default App;
