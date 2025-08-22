function student(){
    this.name="John"
    this.gender="Male"
}

// let stu=new student()
// console.log(stu.name, stu.gender) //John Male
// stu.age=35
// console.log(stu.age) //35

// let stu1=new student()
// console.log(stu1.name, stu1.gender, stu1.age) //John Male undefined

student.prototype.age=35 //adding variable to the function

let stu=new student()
console.log(stu.name, stu.gender, stu.age) // John Male 35

let stu1=new student()
console.log(stu1.name, stu1.gender, stu1.age) //John Male 35