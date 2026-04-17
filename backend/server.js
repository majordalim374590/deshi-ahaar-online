const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./auth');
const menuRoutes = require('./menu');
const ordersRoutes = require('./orders');
const usersRoutes = require('./users');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/users', usersRoutes);

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/deshi_ahaar'; // update with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
