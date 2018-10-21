var mongoose = require('mongoose');

var qstschema = mongoose.Schema(
//  id={
//     type:Number,
//     unique:true 
//  }
  // qst={
  //   type: String,
  //   required: true
  // },
  // option1={
  //   type: String,
  //   required: true
  // },
  // option2={
  //   type: String,
  //   required: true
  // },
  // option3={
  //   type: String,
  //   required: true
  // },
  // option4={
  //   type: String,
  //   required: true
  // },
  // Key={
  //   type: String,
  //   required: true
  // }
  // Date ={
  //  type:Date.now()
  // }
  {
   question_id:Number,
   question:String,
   option1:String,
   option2:String,
   option3:String,
   option4:String,
   keyAnswer:String,

  }
);

var setqst= mongoose.model('setquestion',qstschema);

module.exports = setqst;