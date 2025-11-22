// import fs from 'fs'
// import os from 'os'
// import path from 'path'
// console.log(os.homedir);
// // fs.writeFileSync("demo.txt","hello how are you ?")
import expres from 'express'
const app = expres()
const port = 3000

app.get('/',(req,res)=>{
    res.send("<h1>hello user</h1>")
})
app.get('/about',(req,res)=>{
    res.send("<h1>hello user this is about page</h1>")
})
app.get('/contact',(req,res)=>{
    res.send("<h1>hello user this is contact from</h1>")
})

app.listen(port,()=>{
console.log(`server is running on port ${port}`);

})