class Student{

    //  setDetails(){
    //     this.sid=101,
    //     this.sname="Jhon",
    //     this.grade="A"
    // }

    // setDetails(sid, sname, grade){ //You have to call it explicitly to initialize the vars, unlike the constructor
    //     this.sid=sid,
    //     this.sname=sname,
    //     this.grade=grade
    // }
    constructor(sid, sname, grade){    //Is meant for initializing variables. Is automatically invoked when the class object is created. 
        this.sid=sid,
        this.sname=sname,
        this.grade=grade
    }

    display(){
        console.log(this.sid, this.sname, this.grade)
    }
}

// let student=new Student()
// // student.setDetails()
// student.setDetails(101,"Jhon", "A")
// student.display()

//Using constuctor
let st1=new Student(101,"Jhon", "A")
st1.display() //101 Jhon A

let st2=new Student(102,"Diana", "B") 
st2.display() //102 Diana B

let st3=new Student(103,"Mary", "C")
st3.display() //103 Mary C

let stu4=new Student(104,"Julia", "A")
stu4.display() //104 Julia A