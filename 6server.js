// endpoint - options in the list
// api - colection of list

// run 'localhost : 3000'
const express =  require('express')
//import express from 'express'
const app = express();
const db =  require('C:/Users/SURUCHI/Desktop/nodejs/db.js');


const bodyParser = require('body-parser');
app.use(bodyParser.json());


const Person = require('C:/Users/SURUCHI/Desktop/nodejs/models/person.js');
const MenuItem = require('C:/Users/SURUCHI/Desktop/nodejs/models/menu.js');

app.get('/', function(req, res) {
  res.send('Hello chiken')
})

app.get('/chichen', (req, res) =>{
    var customized_idli = {
        name : 'rava',
        size : '10',
        is_idli : true
    }
    res.send(customized_idli)
})


//app.post('/person', async(req, res)=>{
//    try{
//        const data = req.body
//
//        const newPerson = new Person(data);
//
//        const response = await newPerson.save();
//        console.log('data saved');
//        res.status(200).json(response);
//    }catch(err){
//        console.log('error')
//        res.status(500).json({error: 'internal server error'})
//    }
//
//    //res.send('data is post')
//})


//app.get('/person', async(req, res) => {
//    try{
//        const data = await Person.find();
//        console.log('data fetched');
//        res.status(200).json(data);
//    }catch(err){
//        console.log('error')
//        res.status(500).json({error: 'internal server error'})
//    }
//})


//app.get('/person/:workType', async(req, res) =>{
//
//    try{
//        const workType = req.params.workType;
//        if (workType == 'chef' || workType == 'manager'|| workType == 'waiter'  ){
//            const response = await Person.find({work: workType});
//            console.log('response fetches');
//            res.status(200).json(response);
//        }else{
//            res.status(404).json({error: "invalid work type"});
//            console.log("invalid");
//        }
//    }
//    catch(err){
//        console.log('error');
//        res.status(500).json({error: 'internal server error'});
//}
//})

const personRoutes = require('C:/Users/SURUCHI/Desktop/nodejs/routes/personroutes.js')
app.use('/person',personRoutes);


app.listen(3000, ()=> {
    console.log('listening');
})



