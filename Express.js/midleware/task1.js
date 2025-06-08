const express = require('express')
const app = express();
const port = 3000;


app.use((req,res,next)=>{

    if(req.url.includes("admin")){
        res.status(404).send("<h1>Page not found</h1>")
    }
next();
})


app.get('/', (req, res) => {
    res.status(200).send("<h1>Hello this is home page</h1>")
})
app.get('/about', (req, res) => {
    res.status(200).send("<h1>Hello this is about page</h1>")
})
app.listen(port, () => {
    console.log(`server is running on localhost${port}`)
})