const mongoose = require('mongoose');

const orgSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true
    },
	fname: {
		type: String,
		required: true
	},
	lname: {
		type: String,
		required: true
	},
	dob: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
    gender:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:String,
    followers:Number,
    followings:[
        {   
            fname:String,
            lname:String,
            email:String
        }
    ],
    images:[
        {
            img:String
        }
    ]
})

const Organisers = new mongoose.model("orgbase", orgSchema)

module.exports=Organisers;
