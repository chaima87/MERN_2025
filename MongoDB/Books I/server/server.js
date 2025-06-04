import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import './config/mongoose.config.js';
import BookRoutes from './routes/book.routes.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/api', BookRoutes);


console.log('✅ MONGO_URI:', process.env.MONGO_URI);




app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

