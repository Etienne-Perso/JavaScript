let person={
    fname:"John",
    lname:"Kenedy",
    age:50,
    weight:70
}

//Accessing Object Properties
// console.log(person["fname"]) //John
// console.log(person.age) //50

//Add Property to the existing Object
// person.height=180  //person["height"]=180
// console.log(person.height) //180

//Apdate existing Property
// person.weight=75
// console.log(person.weight) //75

//Remove property from the Object
// delete person.age
// console.log(person.age) //undefined
// console.log(person) //{ fname: 'John', lname: 'Kenedy', weight: 70 }

//for in loop
for(let property in person){
    //console.log(property) //prints only property names
    //console.log(person[property]) //prints only property values
    console.log(property+" : "+person[property])
}