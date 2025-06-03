import http from "http";

const myserver = http.createServer((req , res)=>{

    switch (req.url) {
        case "/":
            res.setHeader("Content-Type", "text/html");
            res.write("<h1>this is home page</h1>")
            res.end()
            break;
        case "/about":
            res.write("<h1>this is about page </h1>")
            res.end()
            break;
        case "/contact":
            res.write("this is contact page")
            res.end()
            break;
        
        default:
            res.write("404 error")
            res.end()
            break;
    }
    

})
const port = 3000;
myserver.listen(port,()=>{
    console.log("server is listen ");
})
