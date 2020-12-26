
/*
//1. Ways to print in JavaScript
console.log("Hello World");
//alert("me");
var a=prompt('Enter Password');
if(a!="Xyz@123")
console.warn("The password is worng");

document.write("this is document write")

//2. Javascript console API
console.log("Hello World", 4 + 6, "Another log");
console.warn("this is warning");
console.error("This is an error");

//3. JavaScript Variables
//What are Variables? - Containers to store data values

/*
multi 
line 
commment


var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

//4. Data types in JavaScript
//Numbers
var num1 = 455;
var num2 = 56.76;

//String
var str1 = "This is a string";
var str2 = 'This is also a string';

//Objects(Dicsnoaray from Python with a value and key)
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}

var mark = { ravi: 34,shubham: 78,harry: 99.977}

console.log(marks);

//Booleans
var a = true;
var b = false;
console.log(a, b);

var und = undefined;
var und;
console.log(und);

var n = null;
console.log(n);

// At a very high level, there are two types of data types in JavaScript
// 1. Primitive data types: undefined, null, number, string, boolean, symbol
// 2. Reference data types: Arrays and Objects

var arr = [1, 2, "bablu", 4, 5,false]
console.log(arr)

// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
console.log("Value of a is ",a);
console.log("Value of b is ",b);
console.log("The value of a + b is ", a+b);
console.log("The value of a - b is ", a-b);
console.log("The value of a * b is ", a*b);
console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
c += 2;
c -= 2; 
c = c - 2;
c *= 2;
c /= 2;
console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);


// Logical Operators

// Logical and
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +(theNumber * theNumber));

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// Logical or
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// Logical not
console.log(!false);
console.log(!true);

// Function in JavaScript

// Number are always displayed in blue but strings are 
// displayed in black in the console of chrome

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);

//another way of writing functions

const sum=function(a,b){
    return a+b;
}
s1 = sum(4, 6);
s2 = sum(14, 16);
console.log(s1, s2);


// Conditionals in JavaScript

var age = 41;
// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}
// if - else statement
if(age > 18){
    console.log('You can drink rasna water');
}
else{
    console.log('You cannot drink rasna water');
}

age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");


var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         break;
//         continue;
//     }
//     console.log(arr[i])
// }
//another way to print each element of array
// arr.forEach(function(element){
//     console.log(element);
// })
// const ac = 0;
// ac++;
// ac = ac +1;
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j ++;
}
j=0;
do{
    console.log(arr[j]);
    j++;
} while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
console.log(myArr.length);
myArr.pop();//delete the element from last
console.log(myArr);
myArr.push("harry")//add elements in last
console.log(myArr);
myArr.shift()//delete element from the starting position
console.log(myArr);
myArr.unshift("Pranav")//add element from the starting position and return the length of the new array position
console.log(myArr);

const newLen = myArr.unshift("Harry")//return the length of new element
console.log(newLen);
console.log(myArr);
d=[5,3,6,2,1,67,3,2];
d.sort()
//arrange the element 
console.log(d);

/*
myArr.toString()
this will convert the array to in strings

// String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";
console.log(myLovelyString.length)
console.log(myLovelyString.indexOf("good"))
console.log(myLovelyString.lastIndexOf("good"))

console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("Harry", "Rohan");
d = d.replace("good", "bad");
console.log(d, myLovelyString)

let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

// DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container")
console.log(elemClass);

elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");

console.log(elem.innerHTML);
console.log(elem.innerText); 

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText); 

tn = document.getElementsByTagName('div')
console.log(tn)
createdElement = document.createElement('p'); // This will create an elemnt
createdElement.innerText = "This is a created para"; //The inner html of that created element it can be header, para or anything else
tn[0].appendChild(createdElement); //Added elemrnt in tn[0],here tn[0] is first div

createdElement2 = document.createElement('b'); //This will again create an new element bold
createdElement2.innerText = "This is a created bold";// the inner html of the nnew bold element
tn[0].replaceChild(createdElement2, createdElement);// what to replace with what
//removeChild(element); ---> removes an element


//Selecting using Query
sel = document.querySelector('.container')//This will return the first element of that selector
console.log(sel)

sel = document.querySelectorAll('.container')//This will return all the element of that selector
console.log(sel)

function clicked(){
    console.log('The button was clicked')
}
window.onload = function(){
    console.log('The document was loaded')

}

//Events in JavaScript
function clicked(){
    console.log("The button was clicked")
}
window.onload=function(){
    console.log("the document was loaded")
}

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
console.log(prevHTML);
firstContainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>We have Clicked</b>"
    console.log("Clicked on Container")
})

firstContainer.addEventListener('mouseout', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on Container");
})

firstContainer.addEventListener('mouseover', function(){
    console.log("Mouse on Container")
})

firstContainer.addEventListener('mouseout', function(){
    console.log("Mouse out of Container");
})



firstContainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log("Mouse down when clicked on Container");
})


// Arrow Functions
// function summ(a, b){
//     return a+b;
// }
// summ = (a,b)=>{
//     return a+b;
// }

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}

// SetTimeout and setinterval
clr= setTimeout(logKaro, 1000);
clr= setInterval(logKaro, 2000);

use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
localStorage.setItem('name', 'harry') 
localStorage 
localStorage.getItem('name')
localStorage.removeItem('name')
localStorage.clear();
*/
// Json 
obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
/*
parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)
*/