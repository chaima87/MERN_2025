import express from 'express';
import mongoose from 'mongoose';


const app = express();
const PORT = 5000;

mongoose.connect("mongodb+srv://chaimalouhichi87:2efiZ3x0gv3CLQHF@cluster0.5rchlka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> {console.log("Pinged your deployment. You successfully connected to MongoDB!")})
.catch(err => console.log("somthing went rong when connecting to the database", err))







app.listen(PORT, () =>console.log(`Listening on port: ${PORT}`));

