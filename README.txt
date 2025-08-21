JavaScript
----------

What is JavaScript?

- JavaScript is a high level, interpreted, programming lunguage used to make web pages more interactive.
- It is interpreted and executed on the client machine.
- Used as default scripting language within HTML.
- Reduces the load on server as some operation.
- It is a very powerful client-side scripting which makes webpages more lively and interactive.
- JavaScript is Case-Sensitive language.
- It will add some dynamic nature to the webpages.


Java vs JavaScript

1) Java:
- It's an OOP programming language
- Runs on a virtual machine or browser
- Code is compiled before execution
- Static type checking 

2) JavaScript:
- It's an OOP scripting language
- Runs on a browser only 
- code is interpreted/ Just in Time(JIT) compiled before execution
- Dynamic type checking

What is DOM? (Document Object Model)
- DOM is an API interface provided by browser.
- When a web page is loaded, the browser creates a Document Object Model on the page.
- Within the DOM, JavaScript can access and change all the elements of an HTML document.

ex:
document.getElementById("demo1").innerHTML="This is Dynamic text message"

with the object model, JavaScript gets all the power it needs to create dynamic HTML

- JavaScript can change all the HTML elements and attributes in the page
- It can change all the CSS styles in the page
- It can remove existing HTML elements and attributes
- It can add new HTML elements and attributes
- It can react to all existing HTML events in the page
- It can create new HTML events in the page

Variables:
- Variables are containers for storing data values.
- We can create variables using let, var and const keywords.

Difference between var and let in JavaScript:
- var and let are both used for variables
- var is funtion scoped whereas let is block scoped

var									let
---									---
Input:								Input:
console.log(x) //x is undefined     console.log(x) //x throw an error
var x=5 							let x=5 
console.log(x)						console.log(x)
Output:								Output:
undefined							error
5

Data type in JS:
1) Primitive: Number, String, Boolean, Undefined
2) Non-Primitive(Objects): Object, Array, Function, Date, Regx

Control statements:
-------------------

1) Conditional statements (if, else if, switch case)

2) Looping statements (while, do while, for, for in, for of)
	2-1)while loop
		while(condition){
			statements
		}
	2-2)do while
		do{
		statements
		}while(condition)
		
3) Jumping statements (break, continue)

JavaScript funtions:
--------------------
- A JavaScript function is a block of statements which will perform a specific task.
- A JavaScript function is executed when "something" invokes it (call it).

ex:
	function name(parameter1, parameter2, parameter3)
	{
		//statements to be executed
	}
	
Why functions?
- You can reuse code: Define the once, and use it many times.
- You can use the same code many times with different arguments, to produce different results.

JavaScript Arrays:
- JavaScript arrays are used to store multiple values in a single variable.
- Any array is a special variable, which can hold more than one value at a time.
- let cars=["Fiat","Volvo", "BMW"]

OOP in JavaScript: Object Oriented Programming 
----------------------------------------------
What is Class & Object?
- Class is a LOgical entity which contains variables and methods.
- Object is Physical entity and an instance of a class.
- Method contains statements. Sometimes method can accept arguments.
- Class also contains constructors.
- Constructor will be called when you create object for the class.

				  Int RollNo;   
				  String Name;				   001 Mary
Class Student --> SetRoll();   --> Objects --> 002 Julie
				  DispRoll();				   003 John
				  SetName();
				  DispName();
				  
							Lion
							Dog
Class Animal --> Objects -->Elephant
							Giraffe
							Cat 
							etc...

What is Encapsulation?
Encapsulation is defined as the wrapping up of data under a single unit.
It is the mechanism that binds together code and the data.
The JavaScript Encapsulation is a process of binding the data(i.e. variables) with the functions acting on that data.