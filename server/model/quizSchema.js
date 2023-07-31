const mongoose=require('mongoose');


const quizSchema = new mongoose.Schema({
    questionNo:{
      type:Number,
      required:true
    },
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
});


const Quiz=new mongoose.model('quiz',quizSchema);


module.exports=Quiz;