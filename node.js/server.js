import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("<h1>hello user</h1>")
})

// About Page (Params)
app.get('/about/:userid', (req, res) => {
    res.send(`<h1>hello user this is about page</h1> User ID: ${req.params.userid}`)
})

// Contact Page (Multiple Params)
app.get('/contact/:user1/:bookid', (req, res) => {
    res.send(`<h1>hello user this is contact form</h1> 
              User1: ${req.params.user1} <br>
              BookID: ${req.params.bookid}`)
})

// Search Page (Query)
app.get('/search', (req, res) => {
    res.send(req.query)
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
