import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

const app = express();

//use express middleware to connect routes to application
app.use('/posts',postRoutes);

app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://akansha0211:Akansha0211@cluster0.xi2qt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    }))
    .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);