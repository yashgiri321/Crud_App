import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/productRoute.js";
import cors from "cors";
const app = express();

dotenv.config();


const MONGO_URL = process.env.MONGO_URL;
const PORT=process.env.PORT;
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use('/api/products', router)


app.get('/',(req,res)=>{
    res.send("Hello Bhai");
})

mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port ${PORT}`)
    });
}).catch((error) => {
    console.log(error)
})