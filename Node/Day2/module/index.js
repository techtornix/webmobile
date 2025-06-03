import  fs  from "fs";
import path from "path";


// fs.writeFileSync("demo.txt","hello this is my demo data");
// fs.readFileSync("demo.txt","./demo.txt","utf-8")
// fs.unlinkSync("./demo.txt")



const directory = path.join("class","student","data","index.html")
// console.log(directory);

// const a = path.resolve(directory)
// console.log(a);
console.log(path.dirname(directory));
console.log(path.basename(directory));
console.log(path.extname(directory));







