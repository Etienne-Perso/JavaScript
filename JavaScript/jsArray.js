// let cars = new Array("Fiat","Volvo","BMW")
// let cars=["Fiat", "Volvo", "BMW"]

// console.log(cars) //[ 'Fiat', 'Volvo', 'BMW' ]

// console.log(cars[0]) //Fiat  accessing elements in the array

// cars[0]="Opel"

// console.log(cars[0]) //Opel

// console.log(cars) //[ 'Opel', 'Volvo', 'BMW' ]

//We can store heterogeneous data in an array
// let myarray=[100, "Welcome", 10.5, true]
// console.log(myarray) //[ 100, 'Welcome', 10.5, true ]

//We can store also objects in an array
// let person1={
//     fname:"John",
//     age:"30"
// }

// let person2={
//     fname:"Diana",
//     age:"26"
// }

// let myarray1=[person1, person2]
// console.log(myarray1) //[ { fname: 'John', age: '30' }, { fname: 'Diana', age: '26' } ]
// console.log(myarray1[0]) //{ fname: 'John', age: '30' }

let fruits=["Banana", "Orange", "Lemon", "Mango"]
console.log(fruits.length) //4

//Looping elements from array
// for(let i=0; i<=fruits.length-1;i++){
//     console.log(fruits[i]) //Banana, Orange, Lemon, Mango
// }

//Looping element from an array using "for of" loop
for(let fruit of fruits){
    console.log(fruit)
}

// Recognize an array using typeof() or isArray()
console.log(typeof(fruits)) //object
console.log(Array.isArray(fruits)) //true