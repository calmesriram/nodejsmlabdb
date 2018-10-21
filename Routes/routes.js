module.exports=(app)=>{
    var route_controllers = require('../Controllers/controller');
    // test purpose
    app.get('/',route_controllers.test);

    // create question
    app.post('/createquestion',route_controllers.qst);

    // view all question
    app.get('/getquestion',route_controllers.getquestion);

    // delete one question
    app.delete('/deletequestion',route_controllers.deletequestion);

    // update one question
    app.put('/updatequestion',route_controllers.updatequestion);

}