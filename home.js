console.log('hello');
// alert('teri maa ki ****');

//Variables
var b = "sommy"
console.log(b);

var somenumber = 45;
//console.log(somenumber);

// document.getElementById('sometext').innerHTML="Hello World";

// var age = prompt("What is your age ?");
// document.getElementById('sometext').innerHTML = age;


//Numbers in javascript
var num1 = 10;
num1 = num1 + 1;
num1++;            //Increment num1 by 1

// Decrement num1 by 1
num1--;
console.log(num1);

//Divide, multiply, remainder
console.log(num1 % 6);
console.log(5 * 10);

//Increment/Decrement by any number you want
num1 += 10;
console.log(num1);


//Functions

//1. Create the function
function fun() {
    // alert("This is my strawberry duniya !!");

    console.log("This is a function");

}
//2. Call the function
fun();

/* Let's create a function that take in a name and
says hello followed by your name

For example:
Name: "Ruchi"
Return: "Hello Ruchi"
*/
function greeting() {
   var name = prompt("what is your name ?");
   var result = "Hello " + name;  
   /* var result = "Hello" + " " + name;
   String Concatenation
   */
   console.log(result);
}
//greeting();

//Function with arguments
function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
sumNumbers(9,5);    // sumNumbers("Hello ", "Ruchi")


function greeting(yourName){
    var result = "Hello" + " " + yourName;
    console.log(result);
}
//var name = prompt("What is your name ?");
//greeting(name);


//While loops

/*var num = 0;
while (num<100){
    num+=1;
    console.log(num);
}
*/

//For loops

for (let num = 0; num<=100; num++)
{
    console.log(num);
}

//Data types

let yourAge = 10;                                 //number
let yourName = "Bob";                             //string
let name = {first: "Jane", last:"Doe"};           //object
let truth = false;                                //Boolean
let groceries = ['apple','banana','orange'];      //array
let random;                                       //undefined
let nothing = null;                               //value null

//Strings in a javascript (common methods)

let fruit = 'banana';
let moreFruits = 'banana\napple'                  //new line
console.log(moreFruits)

console.log(fruit.length);                        //length
console.log(fruit.indexOf("nan"));                //indexing
console.log(fruit.slice(2,6));                    //slicing
console.log(fruit.replace('ban', 'ran'));         //replace
console.log(fruit.toUpperCase());                 //uppercase
console.log(fruit.toLowerCase());                 //lowercase
console.log(fruit.charAt(2));
console.log(fruit[3]);
console.log(fruit.split(''));                     //split by a character
console.log(fruit.split(','));                    //split by a comma

//Arrays

let fruits = ['banana','apple','orange','pineapples'];
fruits = new Array('banana','apple','orange','pineapples');
//alert(fruits[1]);
console.log(fruits[2]);                          //access value at index 2nd

fruits[0] = 'peer'
console.log(fruits);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// array (common methods)

console.log("to string", fruits.toString());          //toString
console.log(fruits.join(" - "));                      //join
//console.log(fruits, fruits.pop(' - '), fruits);     //remove last item
console.log(fruits.pop(), fruits);
console.log(fruits.push('blackberries'), fruits);     //appends
console.log(fruits[4]);
fruits[4] = 'new fruit'; //fruits[fruits.length] = 'new fruit'; same as push
console.log(fruits);
fruits.shift();                                       //remove first item
console.log(fruits);
fruits.unshift("kiwi");                               //add first item
console.log(fruits);

let vegetables = ['asparagus','tomato','brocoli'];
let allGroceries = fruits.concat(vegetables);         //concatenation
console.log(allGroceries);
console.log(allGroceries.slice(1,4));                 //slicing
console.log(allGroceries.reverse());                  //reverse
console.log(allGroceries.sort());                     //alphabetical sorted

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a,b){return a-b}));
// a-b for ascending order and b-a for descending order

let emptyArray = new Array();
for (let num = 0; num<=10; num++)
{
    emptyArray.push(num);
}
console.log(emptyArray);


//Objects in javascript
// dictionaries in python

let student = {
    first: 'Ruchi', 
    last:"rani", 
    age:20, 
    height: 165, 
    studentInfo: function(){
        return this.first + "\n" + this.last + "\n" + this.age;
     }
};
console.log(student.first);
console.log(student.last);
console.log(student.age);

student.first = "notRuchi";          //change value
console.log(student.first);

student.age++;
console.log(student.age);

console.log(student.studentInfo());

// Conditionals, Control flows (if else)

// 18-35 is his target demographic
// && AND
// || OR
//var age = prompt("What is your age ?")
age = 45;
if (age>=18 && age<=35){
    status = "target demo"
    console.log(status);
}
else{
    status = "not his customer"
    console.log(status);
}

//Switch statements

// differentiate between weekday vs. weekend
// day 0 --> sunday
// day 6 --> Saturday
// day 4 --> Thursday --> weekday
switch(6){
    case 0:
        text = "Weekend";
        break;
    case 5:
        text = "weekend";
        break;
    case 6:
        text = "weekend";
        break;
    default:
        text = "weekday"
}
console.log(text);