const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const passport=require('passport');
const cookieParser=require('cookie-parser');

require('./db/conn')
const app=express();


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with the correct frontend URL
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

// app.use(cors());
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

// app.use(cors({
//     origin:['https://deploy-mern-1whq.vercel.app'],
//     methods:['POST',"GET"],
//     credentials:true
// }))

app.use(passport.initialize());

require('./authenticate/passport');

const Router=require('./Routers/router')

app.use(Router);

const PORT=process.env.PORT;



const { spawn } = require('child_process');

app.get('/streamlit', (req, res) => {
  console.log("HI");
  const streamlitProcess = spawn('streamlit', ['run', './Streamlit/olympics.py']);
  streamlitProcess.stdout.pipe(process.stdout);
  streamlitProcess.stderr.pipe(process.stderr);
  res.status(200).json({message:"Showing Stats"});
});


app.get("/", (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies)
 });

 

app.listen(PORT,()=>{
    console.log("Server running on ",PORT);
})