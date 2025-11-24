// NyayaSetu Backend Server
// Entry point for the backend API

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'NyayaSetu Backend Server is running',
        timestamp: new Date().toISOString()
    });
});

// Placeholder routes
app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to NyayaSetu API',
        version: '1.0.0',
        endpoints: [
            '/api/health',
            '/api/cases (to be implemented)',
            '/api/officers (to be implemented)',
            '/api/grievances (to be implemented)',
            '/api/auth (to be implemented)'
        ]
    });
});

// TODO: Import and use routes
// app.use('/api/cases', require('./src/routes/cases'));
// app.use('/api/officers', require('./src/routes/officers'));
// app.use('/api/grievances', require('./src/routes/grievances'));
// app.use('/api/auth', require('./src/routes/auth'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: err.message
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 NyayaSetu Backend Server running on port ${PORT}`);
    console.log(`📍 API available at http://localhost:${PORT}/api`);
});

module.exports = app;
