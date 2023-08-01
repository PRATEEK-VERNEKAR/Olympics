const express=require('express');
const app=express();
const multer=require('multer');
const mongoose=require('mongoose');
const { hashSync, compareSync } = require('bcrypt');
const jwt=require('jsonwebtoken');
const passport =require('passport');
const path=require('path');

const Fans=require('../model/fanSchema');
const Organisers=require('../model/orgSchema');
const Quiz=require('../model/quizSchema');
const {authSchemaOrg,authSchemaFan}=require('../helpers/validateuser');
const {Sports,Countries}=require('../model/sport_countrySchema');
require('dotenv').config('./config.env');



const Organiser=require('../model/orgSchema');
const Fan=require('../model/fanSchema');

const router=express.Router();


router.post('/orgregister',async (req,res)=>{
    try{
        console.log("HJKHJK")
        
        const checkall=await authSchemaOrg.validateAsync(req.body);
        console.log("HJKHJK")
        
        // const {type,fname,lname,dob,gender,country,email,password,cpassword}=req.body;
        const {type,fname,lname,dob,gender,country,email,password,cpassword}=checkall;

        console.log(checkall);

        const userExists=await Organisers.findOne({type,email});

        if(userExists){
            return res.status(409).send({
                success:false,
                message:"User already exists",
            })
        }

        const user=new Organisers({
            type,fname,lname,dob,email,gender,country,password:hashSync(password,10)
        })

        const saveUser=await user.save();
        return res.status(201).send({
            success:true,
            message:"User created successfully",
            user:{
                id:saveUser._id,
                email:user.email
            }
        })
    }
    catch(err){
        if (err.isJoi===true){
            res.status(422).send({
                success:false,
                message:"Joi went wrong",
                error:err.details[0].message
        })
        }
        else{
            res.status(500).send({
                success:false,
                message:"Internal Server Error",
                error:err
            })
        }
    }
})


router.post('/fanregister',async (req,res)=>{
    try{

        const checkall=await authSchemaFan.validateAsync(req.body);


        const {name,email,gender,country,password}=checkall;

        const userExists=await Fans.findOne({email});
        console.log(userExists);
        if(userExists){
            return res.status(409).send({
                success:false,
                message:"Joi went wrong"
            })
        }

        const user=new Fans({
            name,email,gender,country,password:hashSync(password,10)
        })

        const saveUser=await user.save();
        return res.status(201).send({
            success:true,
            message:"User created successfully",
            user:{
                id:saveUser._id,
                email:user.email
            }
        })
    }
    catch(err){
        if (err.isJoi===true){
            console.log("HI");
            return res.status(422).send({
                success:false,
                message:"Joi went wrong",
                error:err.details[0].message
            })
        }
        else{

            return res.status(500).send({
                success:false,
                message:"Something went wrong",
                error:err
            })
        }
    }
})


router.post('/login',async(req,res)=>{
    const {email,password,type} =req.body;
    console.log("LOGIN PAGE DUDE");
    if(!email || !password || !type){
        return res.status(400).send({
            success:false,
            message:"Enter all fields"
        })
    }

    var user;
    console.log(req.body);

    
    if(req.body.type==='Fan'){
        user=await Fans.findOne({email:req.body.email});
    }
    else{
        user=await Organisers.findOne({email:req.body.email});
    }

    if(!user){
        return res.status(401).send({
            success:false,
            message:"Could not find the user"
        })
    }
    
    if(!compareSync(req.body.password,user.password)){
        return res.status(401).send({
            success:false,
            message:"Incorrect password"
        })
    }
    
    const payload={
        email:user.email,
        id:user._id
    }


    // res.cookie("Type",req.body.type,{
    //     expires:new Date(Date.now() + 25892000000),
    //     httpOnly:true
    // });


    console.log(req.cookies);

    
    const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1d"})
    
    return res.status(200).send({
        success:true,
        message:"Logged in successfully",
        token:"Bearer "+token
    })
})


router.get('/cookie',(req,res)=>{
    console.log(req.cookies);
    console.log("cookie route");
    res.send("GOT cookies");
})


router.get('/protected',passport.authenticate('jwt',{session:false}),(req,res)=>{
    console.log("PRateek')")
    console.log("LINE NO @)))",req.cookies);
    
    return res.status(200).send({
        success:true,
        user:{
            id:req.user._id,
            email:req.user.email
        }
    })
});

router.get('/getsports',async (req,res)=>{
    try{
        const sports=await Sports.find({})
        if(sports===undefined){
            return res.status(404).send("No sports data found");
        }
        res.status(200).send(sports);
    }
    catch(err){
        res.status(500).send("Could not fetch sports data Server Error")
    }
})

router.get('/getcountries',async (req,res)=>{

    try{
        const countries=await Countries.find({})
        if(countries===undefined){
            return res.status(404).send("No sports data found");
        }
        res.status(200).send(countries);
    }
    catch(err){
        res.status(500).send("Could not fetch sports data Server Error")
    }
})

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})

const upload=multer({
    storage:storage
})


router.post('/upload',upload.single('file'),async (req,res)=>{
    try{
        console.log(req.file);
        const email=req.query.email;
        console.log(email);

        const user=await Organiser.updateOne({email:email},{$push:{images:{img:req.file.filename}}});
        console.log(user);

        res.status(200).send("Image Added Successfully");
    }
    catch(err){
        console.log("ERROR while uploading");
        res.status(404).send("Error while uploading");
    }
})


router.get('/getimages',async (req,res)=>{
    try{
        const email=req.query.email;
        console.log(email);
        const user=await Organiser.find({email:email});
        console.log(user);
        res.status(200).send(user);
    }
    catch(err){
        console.log(err)
        res.status(404).send("Image area not found");
    }
})

router.get('/followingfan',async (req,res)=>{
    const email=req.query.email;
    try{
        const user=await Fans.findOne({email:email});
        console.log(user);
        res.status(200).send(user);
    }
    catch(err){
        console.log(err);
    }
})


router.get('/getallOrgs',async (req,res)=>{
    try{
        const myemail=req.query.email;
        const type=req.query.type;

        console.log(myemail,type);
        const excludedEmails=[myemail];

        if(type!=='Fan'){
            const myfollowings=await Organiser.find({email:myemail}).select({followings:1,_id:0});
            console.log("HIELLFAn")
            const tempremarr=myfollowings[0].followings;

            tempremarr.forEach((ele)=>{
                excludedEmails.push(ele.email);
            })
        }
        else{
            const myfollowings=await Fans.find({email:myemail}).select({followings:1,_id:0});
            console.log("ORGAn")
            const tempremarr=myfollowings[0].followings;

            tempremarr.forEach((ele)=>{
                excludedEmails.push(ele.email);
            })
        }
        
        console.log(excludedEmails);
        const celebs=await Organiser.find({ email: { $nin: excludedEmails } }).select({fname:1,lname:1,email:1,_id:0});
        res.status(200).send(celebs);
    }
    catch(err){
        console.log(err);
        res.status(404).send("Could fetch all stars");
    }
})


router.get('/getallforfan',async(req,res)=>{
    const excludedEmails=[];
    const myemail=req.query.email;

    try{
        const myfollowings=await Fans.find({email:myemail}).select({followings:1,_id:0});
        console.log("ORGAn")

        console.log(myfollowings)


        console.log(excludedEmails);
        const celebs=await Organiser.find({ email: { $nin: excludedEmails } }).select({fname:1,lname:1,email:1,_id:0});

        res.status(200).send(celebs);
    }
    catch(err){
        console.log(err);
        res.status(404).send("Could fetch all stars");
    }
})



router.get('getfollowersnum',async (req,res)=>{
    const email=req.query.email;
    try{
        const user=await Organiser.findOne({email:email})
        console.log(user);
        res.status(200).send(user.followers);
    }
    catch(err){
        console.log(err);
        res.status(404).send("Followers not found");
    }
})

router.post('/setQuestions',(req,res)=>{
    try{
        console.log(req.body);
        const quesarr=req.body;
        quesarr.forEach(async(element) => {
            try{

                const {questionNo,question,options,answer}=element;
                const ques=new Quiz({questionNo,question,options,answer});
                await ques.save();
            }
            catch(err){
                console.log("INNer catch",err);
            }
        });
        res.status(200).send("Save successfully");
    }
    catch(err){
        res.status(403).send("Could not save questions");
        console.log(err);
    }
})

router.get('/getQuestions',async(req,res)=>{
    try{
        const nums = new Set();
        while(nums.size !== 10) {
            nums.add(Math.floor(Math.random() * 100) + 1);
        }

        let Sno=[...nums];

        let questions=[];

        for(let i=0;i<10;i++){
            const eachques=await Quiz.find({questionNo:Sno[i]});
            questions.push(...eachques)
        }
        console.log(questions.length);

        res.status(200).send(questions);
    }
    catch(err){
        console.log(err);
        res.status(204).send("No questions");
    }
})


router.post('/startfollowing',async (req,res)=>{
    const {email,myemail,type}=req.body;


    if(type!=='Fan'){

        try{
            const myhero=await Organiser.findOne({email:email})

            const user=await Organiser.updateOne({email:myemail},  {
                $push: {
                  followings: { fname:myhero.fname,lname:myhero.lname,email:email}
                }
              });
            console.log("OLLKDKLLDJKLJ");
        }
        catch(err){
            console.log("Updating your following failed");
        }
    }
    else{
        try{
            const myhero=await Organiser.findOne({email:email})
            const user=await Fans.updateOne({email:myemail},  {
                $push: {
                  followings: { fname:myhero.fname,lname:myhero.lname,email:email}
                }
              },{new:true});

        }
        catch(err){
            console.log("Updating your following failed");
        }
    }
    
    try{
        console.log("FOLLOWERS");
        const userb=await Organiser.findOne({email:email});
        let currfollowers=userb.followers;

        if(currfollowers===undefined){
            currfollowers=0;
        }
        console.log(currfollowers);

        const userf=await Organiser.updateOne({email:email},{ $set: { followers: currfollowers+1}},{new:true});
        console.log(userf);

        res.status(200).send("Successfully updated your followings")
    }
    catch(err){
        console.log(err)
    }
})


router.post('/fanstartfollowing',async (req,res)=>{
    const {email,myemail,type}=req.body;


    try{
        const myhero=await Organiser.findOne({email:email})
        const user=await Fans.updateOne({email:myemail},  {
            $push: {
              followings: { fname:myhero.fname,lname:myhero.lname,email:email}
            }
          },{new:true});

    }
    catch(err){
        console.log("Updating your following failed");
        res.status(406).send("Could update following list")
    }
    
    try{
        console.log("FOLLOWERS");
        const userb=await Organiser.findOne({email:email});
        let currfollowers=userb.followers;

        if(currfollowers===undefined){
            currfollowers=0;
        }
        console.log(currfollowers);

        const userf=await Organiser.updateOne({email:email},{ $set: { followers: currfollowers+1}},{new:true});
        console.log(userf);

        res.status(200).send("Successfully updated your followings")
    }
    catch(err){
        console.log(err)
        res.status(406).send("Could update following list")
    }
})


router.get('/doLogout',(req,res)=>{
    console.log(req.cookies);
    res.send("Logging Out");
})



module.exports=router;