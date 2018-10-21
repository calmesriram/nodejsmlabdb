var models_schema = require('../Models/setqst_Schema');

exports.test = (req,res)=>{
    res.write("get method connected");
    res.send("get method connected");
}

exports.qst = (req,res)=>{

// bodyparser
 var qst = new models_schema({
    question_id:req.body.qid,
    question:req.body.question,
    option1:req.body.option1,
    option2:req.body.option2,
    option3:req.body.option3,
    option4:req.body.option4,
    keyAnswer:req.body.keyAnswer
});
// save
 qst.save().then(data=>{
     console.log("success");
 }).catch(err=>{
     console.log("Not inserted");
 })
  console.log("createquestion");
}

// get question
exports.getquestion = (req, res) => {
    models_schema.find()
    .then(data => {
        res.send(data);
        console.log(data);
    }).catch(err => {
        
        console.log(err);
        res.send(err);
    });
     console.log("getquestion");
}

// delete question
exports.deletequestion = (req, res) => {
    models_schema.findOneAndDelete(req.body.question_id)
    .then(data => {
        res.send("deleted");
        console.log("deleted");
    }).catch(err => {
    
         console.log(err);
         res.send(err);
    });
   console.log("deletequestion");
}

// update question


exports.updatequestion = (req, res) => {
    models_schema.findOneAndUpdate(req.body.question_id,{$set:{question:req.body.question,option1:req.body.option1,option2:req.body.option2,option3:req.body.option3,option4:req.body.option4,keyAnswer:req.body.keyAnswer}},function(err, result){
        if(err){
            res.send(err);
            console.log(err)
        }
        if(result)
        {
            res.send("updated");
            console.log("updated");
        }
    })

     console.log("updatequestion");
   
}
