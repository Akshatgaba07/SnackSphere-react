require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PATCH"]
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve frontend from separate folder (no need to copy files)
app.use(express.static(path.join(__dirname, '../SnackSphere-frontend')));

// Make io accessible in routes
app.set('io', io);

// Socket.io connection
io.on('connection', (socket) => {
    console.log('✅ User connected:', socket.id);

    socket.on('join', (userId) => {
        socket.join(userId);
        console.log(`User ${userId} joined their room`);
    });

    socket.on('joinOutlet', (outletName) => {
        socket.join(outletName);
        console.log(`Admin joined outlet: ${outletName}`);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Routes
app.use('/api/orders', require('./routes/orders'));

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        message: 'SnackSphere Backend Running! 🍕',
        mongodb: mongoose.connection.readyState === 1 ? '✅ Connected' : '❌ Disconnected'
    });
});

// ✅ Serve index.html for all non-API routes
app.get('/{*path}', (req, res) => {
    res.sendFile(path.join(__dirname, '../SnackSphere-frontend/index.html'));
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('✅ MongoDB Connected!');
        server.listen(process.env.PORT || 5000, () => {
            console.log(`🚀 Server running on http://localhost:${process.env.PORT || 5000}`);
        }).on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.log('❌ Port 5000 busy — run: npm run kill');
                process.exit(1);
            }
        });
    })
    .catch(err => console.error('❌ MongoDB Error:', err));