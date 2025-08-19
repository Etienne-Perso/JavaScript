//1) var keyword:
/*
//Muli-line 
var x     //declaration
var x=10  //initialization

//single line -declaration and initialization
var x=10

//single line -multiple variables
var x=100, y=200

document.writeln(x)
console.log(x)
*/

//2) let keyword:

//multi line declaration
// let x       //declaration
// x="welcome" //initialization

//single line -declaration and initialization
// let x="Welcome" 
// console.log(x)

//single line -multiple variables
// let x="welcome", y=100
// console.log(x)
// console.log(y)

//Difference between var and let keywords
// console.log(x) //x is undefined / Uncaught ReferenceError: Cannot access 'x' before initialization
// //var x=5
// let x=5
// console.log(x) //5 / error

//3) const keyword:
// const x=100
// console.log(x)  //100
// x=300           //incorrect because x is a constant variable.It can't be changed. 
// console.log(x)  //Uncaught TypeError: Assignment to constant variable.


//4) Data type:
// let x=100
// console.log(typeof(x)) //number

// let price=100.50
// console.log(typeof(price)) //number

// let stuName="John"
// console.log(typeof(stuName)) //string

// let status=true
// console.log(typeof(status)) //boolean

// let status=null
// console.log(typeof(status)) //object

// let value //let value = undefined
// console.log(typeof(value)) //undefined
