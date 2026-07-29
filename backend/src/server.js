// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// DELETE LATER
import { getAllHeroes } from './utils/heroApi.js';
// DELETE LATER

// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());                    // Allows frontend (localhost:5173) to connect
app.use(express.json());            // Parses incoming JSON requests (important for forms)

// Quick test route to confirm the server is alive
app.get('/', (req, res) => {
  res.json({ message: 'Backend server is running 🚀' });
});

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Atlas connected successfully');
    //! Populate the database here...
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1); // Stop if DB connection fails (good for dev)
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
  console.log(`Test it: http://localhost:${PORT}/`);
});

// DELETE LATER - TESTING
getAllHeroes();

//! Run doHeroesExist, getAllHeroes, populateHeroes after successful DB
//! connection...