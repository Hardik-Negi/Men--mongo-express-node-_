const express=require('express');
const app=express();
const morgan=require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.set("view engine",'ejs');



app.get('/',(req,res)=>{
 res.render('index');
})

app.get('/about',(req,res)=>{
   res.send('about page')
})

app.get('/profile',(req,res)=>{
   res.send('Profile Page')
})

app.post('/get-form-data',(req,res)=>{
   console.log(req.body);
   res.send('data received');
})

app.listen(3000);