// This is my main server file. I use Express to build the backend API for my project.
// I want to keep things secure, organized, and easy to maintain, so I use several helpful packages and structure my code clearly.

require('dotenv').config(); // I load environment variables from a .env file for flexibility and security.
const express = require('express'); // Express is my web framework for handling HTTP requests and responses.
const mongoose = require('mongoose'); // I use Mongoose to interact with MongoDB easily.
const cors = require('cors'); // CORS lets my frontend (which might run on a different port) talk to this backend.
const morgan = require('morgan'); // Morgan logs HTTP requests, which helps me debug and monitor traffic.
const helmet = require('helmet'); // Helmet adds security headers to protect my app.
const path = require('path'); // I need this to serve static files from the React build

// Import middlewares
const countryDetection = require('./middlewares/CountryDetectionMiddleware'); // I use this to detect the user's country for localization.

// Import routes
const authRoutes = require('./routes/authRoutes'); // Handles user registration and login.
const userRoutes = require('./routes/userRoutes'); // Handles user profile actions.
const serviceRoutes = require('./routes/serviceRoutes'); // Handles poultry service listings.
const marketRoutes = require('./routes/marketRoutes'); // Handles market price data.
const communityRoutes = require('./routes/communityRoutes'); // Handles community forum posts.

const app = express(); // I create my Express app instance here.

// Middleware
app.use(helmet()); // I add security headers to all responses.
app.use(cors()); // I allow cross-origin requests from the frontend.
app.use(express.json()); // I want to accept JSON in request bodies.
app.use(morgan('dev')); // I log every request for easier debugging.
app.use(countryDetection); // I detect the user's country for every request.

// API Routes
app.use('/api/auth', authRoutes); // All authentication endpoints are grouped here.
app.use('/api/user', userRoutes); // User profile endpoints.
app.use('/api/services', serviceRoutes); // Service listing endpoints.
app.use('/api/market', marketRoutes); // Market price endpoints.
app.use('/api/community', communityRoutes); // Community forum endpoints.

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

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, '../frontend/build')));

// The "catchall" handler: for any request that doesn't match an API route, send back React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// 404 handler
app.use((req, res, next) => {
  // If no route matches, I return a 404 error in JSON format.
  res.status(404).json({ error: 'Not found' });
});

// Central error handler
app.use((err, req, res, next) => {
  // If something goes wrong anywhere, I log the error and return a generic message.
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000; // I use the port from .env or default to 5000.
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/poultry-agritech'; // I use the MongoDB URI from .env or a default.

if (!process.env.MONGO_URI) {
  console.warn('Warning: MONGO_URI environment variable is not set. Using local MongoDB.');
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // If the database connects successfully, I start the server.
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    // If the database connection fails, I log the error and stop the server.
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// This is my main server file. I use Express for the backend API, connect to MongoDB with Mongoose, and set up middleware for security, logging, and cross-origin requests. I organize my routes for different features and handle errors centrally. 