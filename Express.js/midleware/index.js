const express = require('express')
const app = express()
const port = 3000

app.use((req,res,next)=>{

    console.log(`${new Date().toLocaleString()}: ${req.method} ${req.url}`)
    next()
})


app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>')
    })
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>')
    })


app.listen(port, () => {  console.log(`Server is running at http://localhost:${port}`)
})