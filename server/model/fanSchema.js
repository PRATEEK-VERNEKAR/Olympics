const mongoose = require('mongoose');

const fanSchema = new mongoose.Schema({
	name: {
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
    followings:[
        {
            fname:String,
            lname:String,
            email:String
        }
    ]
})

const Fans = new mongoose.model("fanbase", fanSchema)


module.exports=Fans;

