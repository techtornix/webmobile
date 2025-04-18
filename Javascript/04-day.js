// // -------------------------------------------> String Methods <-------------------------------------------------

//1. toUpperCase() - Converts all characters to uppercase
//console.log("hello".toUpperCase()); // "HELLO"

// // 2. toLowerCase() - Converts all characters to lowercase
 //console.log("HELLO".toLowerCase()); // "hello"

// // 3. includes() - Checks if a substring exists
 //console.log("alkeiyifiuheoiqiofiyioeysoiefyio".includes('o')); // true

// // 4. startsWith() - Checks if string starts with given value
//console.log("Hello world".startsWith("hello"));//return true , fals 

// // 5. endsWith() - Checks if string ends with given value
 //console.log("Hello world".endsWith("hello")); // true

// // 6. indexOf() - Returns the first index of a substring (or -1 if not found)
 //onsole.log("banana".indexOf("n")); 

// // 7. lastIndexOf() - Returns the last index of a substring
// console.log("banana".lastIndexOf("a"));

// // 8. charAt() - Returns the character at a specific index
// console.log("hello".charAt(1)); // "e"

// // 9. charCodeAt() - Returns Unicode of the character at a specific index
//console.log("ABC".charCodeAt(2)); // 65

// // 10. length - Returns the length of the string
// console.log("OpenAI".length); // 6

// // 11. slice() - Extracts part of a string (from, to)
 //console.log("JavaScript".slice(1,4)); // "Script"

// // 12. substring() - Similar to slice(), but doesn't accept negative indexes
// console.log("JavaScript -1".substring(0, 4)); // "Java"

// // 13. substr() - Returns part of the string (start, length)
 //console.log("JavaScript".substr(4, 6)); // "Script"

// // 14. replace() - Replaces part of a string
 //console.log("I love JavaScript".replace("love", "like")); // "I like JavaScript"

// // 15. replaceAll() - Replaces all matches in a string
// console.log("hi hi hi".replaceAll("hi", "hello")); // "hello hello hello"

// // 16. trim() - Removes whitespace from both ends
// console.log("  hello  ".trim()); // "hello"

// // 17. trimStart() - Removes whitespace from the start
//console.log("  hello".trimStart()); // "hello"

// // 18. trimEnd() - Removes whitespace from the end
//console.log("hello  ".trimEnd()); // "hello"

// // 19. split() - Splits the string into an array
//  console.log("a,b,c".split(",")); // ["a", "b", "c"]

// // 20. repeat() - Repeats a string multiple times
//  console.log("ha".repeat(3)); // "hahaha"

// // 21. concat() - Concatenates strings
// console.log("Hello".concat(" ", "World")); // "Hello World"
// console.log("Hello"+" "+"World" ) // simple method
// // 22. padStart() - Pads string from the start
//  console.log("5".padStart(3, "0")); // "005"

// // 23. padEnd() - Pads string from the end
// console.log("5".padEnd(3, "0")); // "500"

// // 24. match() - Searches a string for a match using RegExp
// console.log("hello123".match(/\d+/)); // ["123"]

// // 25. search() - Searches for a match and returns index
//  console.log("hello123".search(/\d/)); // 5

// // 26. toString() - Converts other data types to string
// let num = 123;
// console.log(num.toString()); // "123"


       
                  
//                   // ---------------------> Array Methods<--------------------------
//  let arr = [1,2,3,4,5]
// console.log(arr);
//console.log(arr.toString()); //to convert the string in an arry//
//console.log(arr.join("-")) ;//replace , with any thing and like join with any thing you want //
//  arr.pop()
// console.log(arr)
 //console.log(arr.pop()) ;//wehn we use pop it remove last element from end in this case it show the poped element  //
// // console.log(arr) // now thi show the exat value of with popining like poped value not inlcude in output//
//arr.unshift(9); // add element to the start of an array//
//console.log(arr)

//arr.shift(); //remove element from the first of an array//
//console.log(arr);

//  let a = [1, 2];
//  let b = [3, 4];
//  let result = a.concat(b); //merge 2 arrays//
// // console.log(result);
// let ar = [1,2,3,4,5]
// let output = ar.slice(1, 3); // return the copy of the part of an array not change the actual (original) array not include last element like from 1 index to 3 index last index3 not included//
//  console.log(output);


//  arr.splice(1, 2);  // remove 2 elements from index 1 and like it remove 1 to 2 and last element 2 include also remove // 
//  console.log(arr);
//  let arr = [1,2,3,4,5]

// console.log(arr.indexOf(2)); // use to find the indexing value like 2 store on which index //
// console.log(arr.includes(2)); // check if a value exist in an array give true and fals values//

//  arr.forEach(item => console.log(item)); // loop on ann array like print elements in line //


// let result = arr.map(x => x * 2); //Returns a new array by applying a function to each element//
// console.log(result);

// let arr = [1, 2, 3, 4];
// let output = arr.filter(x => x < 2); // filter value form array//
// console.log(output);

// let result1 = arr.reduce((sum, curr) => sum + curr, 0); // reduce all values of arra in single value like we can say that it summ all array values//
// console.log(result1);

// let arr2 = [5, 12, 8];    
// let result2 = arr2.find(x => x > 10);   // return first matching value
// console.log(result2);

//  let arr3 = [5, 12, 8];
// let result3 = arr3.findIndex(x => x > 10);  // finde the index where store value 
// console.log(result3);

//  arr3.sort();
//  console.log(arr3);//Sorts the array
//  arr3.sort((a, b) => a - b);
//  console.log(arr3);


//  let arr4 = [1, 2, 3];
//  arr4.reverse();
// console.log(arr4);


// // ---------------------------------------> Math Methods <--------------------------------------------

// // 1. Math.abs() - Returns the absolute value of a number.
//  console.log(Math.abs(-5)); // 5

// // 2. Math.ceil() - Rounds a number **up** to the nearest integer.
// console.log(Math.ceil(4.1)); // 5

// // 3. Math.floor() - Rounds a number **down** to the nearest integer.
// console.log(Math.floor(4.9)); // 4

// // 4. Math.round() - Rounds a number to the nearest integer.
// console.log(Math.round(4.5)); // 5

// // 5. Math.max() - Returns the largest number from the set of given numbers.
// console.log(Math.max(1, 2, 3, 4)); // 4

// // 6. Math.min() - Returns the smallest number from the set of given numbers.
// console.log(Math.min(1, 2, 3, 4)); // 1

// // 7. Math.random() - Returns a random number between 0 (inclusive) and 1 (exclusive).
// console.log(Math.random()); // Varies, e.g., 0.342958...

// // 8. Math.pow() - Returns the base raised to the power of the exponent.
// console.log(Math.pow(2, 3)); // 8

// // 9. Math.sqrt() - Returns the square root of a number.
// console.log(Math.sqrt(16)); // 4

// // 10. Math.log() - Returns the natural logarithm (base e) of a number.
// console.log(Math.log(10)); // 2.302585...

// // 11. Math.sin() - Returns the sine of a number (in radians).
// console.log(Math.sin(Math.PI / 2)); // 1

// // 12. Math.cos() - Returns the cosine of a number (in radians).
// console.log(Math.cos(0)); // 1

// // // 13. Math.tan() - Returns the tangent of a number (in radians).
// console.log(Math.tan(Math.PI / 4)); // 1

// // 14. Math.PI - Returns the value of Pi (π).
// console.log(Math.PI); // 3.141592653589793

// // 15. Math.E - Returns the value of Euler's number (e).
// console.log(Math.E); // 2.718281828459045

// // 16. Math.trunc() - Returns the integer part of a number, removing the decimal part.
// console.log(Math.trunc(4.9)); // 4

// // 17. Math.sign() - Returns the sign of a number (positive, negative, or zero).
// console.log(Math.sign(-5)); // -1
// console.log(Math.sign(0));  // 0
// console.log(Math.sign(10)); // 1

// // 18. Math.imul() - Returns the result of a 32-bit integer multiplication.
// console.log(Math.imul(2, 3)); // 6

// 19. Math.clz32() - Returns the number of leading zeroes in the 32-bit binary representation of a number.
// console.log(Math.clz32(11)); // 31


// // --------------------------------------> Date Method <------------------------------------------

//  ----> first make a variable and store date method in this and then you can use variable name to use the finctions
//  of date mehtod 

// Current date and time ka object banata hai



const now = new Date();


// // getFullYear(): current year return karta hai (4-digit)
// console.log(now.getFullYear()); 

// // getMonth(): current month return karta hai (0 se 11 tak; January = 0)
// console.log(now.getMonth()); 

// // getDate(): month ka current date (1 se 31 tak)
// console.log(now.getDate()); 

// // getDay(): week ka day return karta hai (0 = Sunday, 6 = Saturday)
// console.log(now.getDay()); 

// // getHours(): current hour return karta hai (0 se 23 tak)
// console.log(now.getHours()); 

// // getMinutes(): current minute return karta hai (0 se 59 tak)
// console.log(now.getMinutes()); 

// // getSeconds(): current second return karta hai (0 se 59 tak)
// console.log(now.getSeconds()); 

// // getMilliseconds(): milliseconds return karta hai (0 se 999 tak)
// console.log(now.getMilliseconds()); 

// // getTime(): January 1, 1970 se le kar ab tak milliseconds count return karta hai
// console.log(now.getTime());

// // toDateString(): date ko readable string format mein return karta hai
// console.log(now.toDateString()); 

// // toISOString(): date ko ISO 8601 format mein return karta hai
// console.log(now.toISOString()); 

// // toLocaleDateString(): local date string return karta hai
// console.log(now.toLocaleDateString()); 

// // toLocaleTimeString(): local time string return karta hai
// console.log(now.toLocaleTimeString());

// toString(): complete date and time string format mein return karta hai// e.g., "Thu Apr 17 2025 14:30:15 GMT+0000 (UTC)"










