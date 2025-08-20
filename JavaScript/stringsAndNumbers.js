//1)Strings:

// let s=new String()
// let s="Welcome"
// console.log(s)

//chartAt() -->Returns the character at the specified index.
// console.log(s.charAt(2))// l

//concat() -->Returns a string that contains the concatenation of two or more strings.
// console.log(s.concat(" to JavaScript programming...:)")) //Welcome to JavaScript programming...:)
// console.log(s.concat(" to JavaScript").concat(" programming...:)"))// Welcome to JavaScript programming...:)
// console.log(s.concat(" to JavaScript", " programming...:)"))// Welcome to JavaScript programming...:)

//replace() -->Replaces text in a string, using a regular expression or search string.
// let s="Welcome to Java"
// console.log(s.replace("Java", "JavaScript"))

//substring() -->Returns the substring at the specified location within a String object. 
// let s="Welcome"
// console.log(s.substring(0,3)) //Wel
// console.log(s.substring(3,7)) //come

//toLowerCase(), toUpperCase() -->Converts all the alphabetic characters in a string to lowercase. Converts all the alphabetic characters in a string to uppercase.
// s="WELcome"
// console.log(s.toLowerCase()) //welcome
// console.log(s.toUpperCase()) //WELCOME

//split() -->Split a string into substrings using the specified separator and return them as an array.
// s="Welcome to JavaScript"
// let arr=s.split(" ")
// console.log(arr[0]) //Welcome
// console.log(arr[1]) //to
// console.log(arr[2]) //JavaScript

//trim() -->Removes the leading and trailing white space and line terminator characters from a string.
// s="  Welcome   "
// console.log(s) //  Welcome    
// console.log(s.trim()) //Welcome



//2)Numbers:

// let num=100
// let num=new Number()
// console.log(num) //100

// let x=10 //Integer
// let y=10.5 //Decimal
// let z=10e2 //exponencial value

// console.log(x,y,z) //10 10.5 1000

//isInteger() -->Returns true if the value passed is an integer, false otherwise.
// x=100
// y=100.99
// z="x"
// console.log(Number.isInteger(x)) //true 
// console.log(Number.isInteger(y)) //false
// console.log(Number.isInteger(z)) //false

//parseInt() -->Converts A string to an integer.
// x="Welcome"
// console.log(Number.parseInt(x)) //NaN. This is not possible
// x="12345"
// console.log(typeof(x)) //string
// console.log(typeof(Number.parseInt(x))) //number

//parseFloat() --> Converts a string to a floating-point number.
// x="123.456"
// console.log(typeof(x)) //string
// console.log(typeof(Number.parseFloat(x))) //number

//toString() -->
// let n=12345 //integer
let n=123.45   //decimal
console.log(typeof(n)) //number
console.log(typeof(Number.toString(n))) //string