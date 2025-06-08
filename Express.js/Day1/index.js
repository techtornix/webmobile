const express = require('express');
const app = express();
app.post('/', (req, res) => {
    res.send('Hello, this is home page of the server!')
});
// app.post('/about:slug/:hello',(req,res)=>{
//     res.send("this is about page"+" hello i am "+req.query.name +"i am "+req.query.age+"years old")
// })


app.get('./contact:Name',(req,res)=>{
    res.send(`hey this is my ${req.params. Name}`)
})
app.listen(3000,()=>("Server running on port 3000"))



