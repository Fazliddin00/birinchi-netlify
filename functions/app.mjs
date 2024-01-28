import  express  from "express";
import bodyParser from "body-parser";
import ServerlessHttp from "serverless-http";
const app=express();
const port=9000;
const data=[
    {name:'User1',surname:'John'},
    {name:'User2',surname:'Doi'}
];
app.use(bodyParser.json());
app.get('/getAllUser',(req,res)=>{
   res.json(data);
});
app.post('/postUser',(req,res)=>{
    data.push(req.body);
    res.send('Successfuly added');
});


 export const handler=ServerlessHttp(app)
