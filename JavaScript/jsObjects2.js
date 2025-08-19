let employee={
    empname:"Scott",
    empid:101,
    basicSalary:50000,
    bonus: function(){
        return ((this.basicSalary*10)/100)
    }
}

console.log(employee.empname) //Scott
//console.log(employee.bonus) //[Function: bonus]
console.log(employee.bonus()) //5000
