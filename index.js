import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { Connection  } from './database/db.js';
// import DefaultData from './default.js';
import {defaultData} from './default.js'
import Router from "./routes/route.js";



dotenv.config();


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/',Router)


const PORT = 5000;
Connection(process.env.DB_USERNAME,process.env.DB_PASSWORD);
app.listen(PORT,()=>console.log(`sever running on port ${PORT}`))

defaultData()
