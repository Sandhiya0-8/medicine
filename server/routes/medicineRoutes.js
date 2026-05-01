const express = require('express');
const Medicine = require('../models/Medicine');
const router = express.Router();

// GET all medicines
router.get('/', async (req, res) => {
  try {
    const medicines = await Medicine.find().sort({ createdAt: -1 });
    res.status(200).json(medicines);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching medicines', error: error.message });
  }
});

// POST to add a new medicine
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    
    // Basic validation is handled by mongoose, but good to check presence
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    const newMedicine = new Medicine({ name });
    await newMedicine.save();
    res.status(201).json(newMedicine);
  } catch (error) {
    res.status(400).json({ message: 'Error adding medicine', error: error.message });
  }
});

module.exports = router;
