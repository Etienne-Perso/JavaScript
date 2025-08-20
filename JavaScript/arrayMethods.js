// let fruits=["Banana", "Orange", "Lemon", "Mango"]

//toString(), join() -->converting an array into a string format
// console.log(fruits.toString()) //Banana,Orange,Lemon,Mango
// console.log(fruits.join()) //Banana,Orange,Lemon,Mango
// console.log(fruits.join("-")) //Banana-Orange-Lemon-Mango

// pop() --> removes the last element of an array and returns it as an output
// console.log(fruits.pop()) //Mango
// console.log(fruits) // [ 'Banana', 'Orange', 'Lemon' ]

//push() --> adds an element at the end of array and returns the new array's lenght
// console.log(fruits.push("Apple")) // 5
// console.log(fruits) // [ 'Banana', 'Orange', 'Lemon', 'Mango', 'Apple' ]

//shift() --> removes the first element of an array and returns it as an ouput
// console.log(fruits.shift()) // Banana
// console.log(fruits) // [ 'Orange', 'Lemon', 'Mango' ]

//unshift() -->adds new element at the begining of array and returns the new arra's lenght
// console.log(fruits.unshift("Kiwi")) //5
// console.log(fruits) //[ 'Kiwi', 'Banana', 'Orange', 'Lemon', 'Mango' ]

//delete() --> removes elements from an array but the place of elements remains
// delete fruits[1]
// console.log(fruits) // [ 'Banana', <1 empty item>, 'Lemon', 'Mango' ]

//concat() --> Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// let arr1=[10,20]
// let arr2=["A","B","C"]
// console.log(arr1.concat(arr2)) //[ 10, 20, 'A', 'B', 'C' ]

// let arr3=["x","y","z"]
// console.log(arr1.concat(arr2,arr3)) //[10,  20,  'A', 'B','C', 'x', 'y', 'z']

//slice() -->Returns a copy of a section of an array
// let fruits=["Banana", "Orange", "Lemon", "Apple", "Mango"]
// console.log(fruits.slice(1)) //[ 'Orange', 'Lemon', 'Apple', 'Mango' ]
// console.log(fruits.slice(1,3)) //[ 'Orange', 'Lemon' ]

//sort() --> Sorts an array in place. This method mutates the array and returns a reference to the same array.
// let fruits=["Banana", "Orange", "Lemon", "Apple", "Mango"]
// console.log(fruits.sort()) //[ 'Apple', 'Banana', 'Lemon', 'Mango', 'Orange' ]

// let nums=[100,500,300,800,]
// console.log(nums.sort()) // [ 100, 300, 500, 800 ]

//reverse() -->Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
let fruits=["Banana", "Orange", "Lemon", "Apple", "Mango"]
console.log(fruits) //[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
console.log(fruits.reverse()) //[ 'Mango', 'Apple', 'Lemon', 'Orange', 'Banana' ]