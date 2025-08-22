class Employee{

    constructor(eid, empname){
        this.eid=eid
        this.empname=empname
    }
}

Employee.prototype.sal=50000 //adding variable to the class

// let empObj1=new Employee(101, "Mary")
// console.log(empObj1.eid, empObj1.empname, empObj1.sal) //101 Mary 50000

// let empObj2=new Employee(102, "Julia")
// console.log(empObj2.eid, empObj2.empname, empObj2.sal) //102 Julia 50000

Employee.prototype.display=function(){  //adding function to the class
                                console.log(this.eid, this.empname, this.sal)
                           }
let empObj1=new Employee(101, "John") //101 John 50000
empObj1.display()

let empObj2=new Employee(102, "Julia") //102 Julia 50000
empObj2.display()
