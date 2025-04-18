

// ----------------------->normal functions<----------------------------
function hello(a, b, c = 1) {
    console.log(`This is the sum of three numbers: ${a + b + c}`); // using templet litrels
    console.log("This is the sum: ", a + b + c); 
}

hello(1, 1);

// ----------------------------------->Arrow Functions<-----------------------------------------------

const hello = (a, b) => {
    console.log("hello world", a + b);
}

hello(4, 6);

// --------------------------> simple array <------------------------------

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); 
console.log(fruits[1]); 
console.log(fruits[2]); 

// --------------------> loop in array <-------------------------------------
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// ------------------------------------->2D Array <------------------------------------

let students = [
    ["Name", "Age", "Class"],
    ["Ali", 20, "10th"],
    ["Ahmed", 21, "11th"]
];

console.log(students[0][0]); 
console.log(students[1][0]); 
console.log(students[2][2]); 



// -----------------------------------> nested loop and loop in 2d array <--------------------------------------

for (let i = 0; i < students.length; i++) {
    let row = "";
    for (let j = 0; j < students[i].length; j++) {
        row += students[i][j] + " ";
    }
    console.log(row);
}



