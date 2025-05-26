require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');

// Import middlewares
const countryDetection = require('./middlewares/CountryDetectionMiddleware');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const marketRoutes = require('./routes/marketRoutes');
const communityRoutes = require('./routes/communityRoutes');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(countryDetection);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/market', marketRoutes);
app.use('/api/community', communityRoutes);

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Advanced health check endpoint
app.get('/api/health', (req, res) => {
  const dbStates = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  res.json({
    status: 'ok',
    serverTime: new Date().toISOString(),
    db: dbStates[mongoose.connection.readyState] || 'unknown',
    environment: process.env.NODE_ENV || 'development'
  });
});

// The "catchall" handler: for any request that doesn't match an API route,
// send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/poultry-agritech';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

module.exports = app;