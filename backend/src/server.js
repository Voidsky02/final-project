// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { errors } from 'celebrate';
import { router } from './routes/index.js';
import { initializeDatabase } from './utils/initializeDatabase.js';

// Load global environment variables from .env
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Allows frontend (localhost:5173) to connect
app.use(express.json()); // Parses incoming JSON requests (important for forms)

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Atlas connected successfully');
    // Populate the database here...
    initializeDatabase();   
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1); // Stop if DB connection fails (good for dev)
  });

  // Custom Middleware (correct placement?)
  app.use('/', router);
  app.use(errors()); // So Celebrate can throw the custom errors I made.

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
  console.log(`Test it: http://localhost:${PORT}/`);
});