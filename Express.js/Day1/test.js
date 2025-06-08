// in this we use enbironment variable for using port from env

const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>hello this is home page</h1>')
})
//use $env.PORT to set the port dynamically

const Port = process.env.PORT;
app.listen(Port,()=>("server is runing"))


