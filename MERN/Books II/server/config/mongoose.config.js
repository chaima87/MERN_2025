import dotenv from 'dotenv';
dotenv.config();

import { connect } from 'mongoose';


console.log('MONGO_URI:', process.env.MONGO_URI);

connect(process.env.MONGO_URI)
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));
