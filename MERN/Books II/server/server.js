import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoutes from './routes/book.routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', bookRoutes); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.listen(process.env.PORT || 8000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 8000}`);
});
