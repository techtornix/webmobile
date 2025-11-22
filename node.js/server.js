import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send(`<h1> this is Home Page</h1>`)
})
app.get('/about/:userid', (req, res) => {

    res.send(`this is about page ${req.params.userid}`)
})


app.get('/search',(req,res)=>{

    res.send(req.query)
})


app.listen(3000, () => {
    console.log("Server is rining on port 3000")

})