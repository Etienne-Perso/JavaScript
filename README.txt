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
