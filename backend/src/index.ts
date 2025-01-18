//imports
import { app } from "./app";

import connectDB from './db';
import dotenv from 'dotenv'

dotenv.config(
    {
        path: './.env',
        
    }
);

//server setup
const PORT=process.env.PORT ;
//connecting the databases 
connectDB().then(
    ()=>{
    app.listen(PORT,()=>{
    console.log(`Server is running on port https://localhost:${PORT}`);
});
    }
).catch((error)=>{
    console.error("Error connecting to database",error);
    process.exit(1);
});



