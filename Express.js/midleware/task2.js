const express = require('express')
const app = express();
const port = 3000;


app.use((req,res,next)=>{
req.username = "Alihan";
next();
})


app.get('/', (req, res) => {
    res.status(200).send(`<h1>Hello ${req.username} How are you?</h1> `)
})

app.listen(port, () => {
    console.log(`server is running on localhost${port}`)
})