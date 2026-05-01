const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const medicineRoutes = require('./routes/medicineRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/medicine-inventory';

// Middleware
app.use(cors()); // Allow cross-origin requests from frontend
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully'))
  .catch((err) => console.error('❌ Error connecting to MongoDB:', err.message));

// Routes
app.use('/api/medicines', medicineRoutes);

// Base route for sanity check
app.get('/', (req, res) => {
  res.send('Medicine Inventory API is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
