

// const heading = document.getElementsByTagName("h1")
// console.log(heading);

// let id = document.getElementById("id")
// console.log(id.textContent);

// let c = document.getElementsByClassName("hello")
// console.log(c);


let item = document.querySelector(".hello")
item.innerHTML = "<h2/>changed</h2>"
item.style.color = "blue"
item.style.backgroundColor = 'red'
console.log(item.textContent);

