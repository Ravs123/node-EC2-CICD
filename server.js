
const express = require('express');
const app = express();

app.get('/home',(req,res)=>{
    res.status(200).send({
     "name": "Pradeep" ,
     "job" : "developer"
    })
})


const PORT =3000;

app.listen(PORT,()=>{
    console.log(`Connected to PORT 3000`);
    
})