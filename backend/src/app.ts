import express,{Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from 'body-parser';
import healthCheck from './controllers/healthcheck.controllers';
import authRouter from './routes/auth.routes';

const app:Express = express();


//common middlewares
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true,
        methods:['GET','POST','PUT','PATCH','DELETE']
    }
));

//middlewares
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.route('/api/healthcheck');
app.use('api/auth',authRouter)





export {app};