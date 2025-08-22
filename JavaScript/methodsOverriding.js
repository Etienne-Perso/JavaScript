class Bank{
    roi(){
        return 0
    }
}

class Axis extends Bank{
    roi(){
        return 10.5
    }
}

class SBI extends Bank{
    roi(){
        return 12.5
    }
}

let axis=new Axis()
console.log(axis.roi()) //10.5

let sbi=new SBI()
console.log(sbi.roi()) //12.5

//Method Overriding is possible only with inheritance concept. 