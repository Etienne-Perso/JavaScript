//static key word is used for saving memory
class Test{
    static a=10 //static variable
           b=20 //Non-static variable

    static m1(){ //static method
        console.log("This is m1 static method")
    }

          m2(){ //Non-static method
        console.log("This is m2 non-static method")
    }
}

// 1) We can access static variables and static methods within a class using class name
// console.log(Test.a) //10
// console.log(Test.b) //undefined , we can't have access to non-static variable within a class using class name
// Test.a=1000 
// console.log(Test.a) //1000
// console.log(Test.m1()) //This is m1 static method
// console.log(Test.m2()) //Incorrect: TypeError: Test.m2 is not a function. We can't have access to non-static methods within a class using class name

// 2) We can access non-static variables and non-static methods within a class using Objects
// let t=new Test()
// //Non-static
// console.log(t.b) //20
// t.m2() // This is m2 non-static method

//Static
// console.log(t.a) //undefined , we can't have access to static variable within a class using Object
// t.m1()  ////Incorrect: TypeError: T.m1 is not a function. We can't have access to static using an Object