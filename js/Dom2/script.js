

// let data = document.querySelector("#greting")

// console.log(data);

// // function hello(){
// //     alert("hello Class")
// // }

// let btn =  document.querySelector(".click")
// btn.addEventListener('click',()=>{
//     // alert("Hello world")
//     // data.textContent="how are you"
//     // data.innerHTML="<p>html change</p>"
//     data.style.backgroundColor = "red"
//     data.style.color="blue"

// })

// let box1 = document.querySelector('.box')
// let newp = document.querySelector('.p')

// const change =()=>{
//     // alert("hello")
//     // data.append("hello world")
//     newp.textContent = "Hello World"
//     newp.style.backgroundColor="red"
//     box1.append(newp)


// }

// change()
// change()


let data = fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(data => console.log(data)).catch(err=>console.log(err));
console.log();

