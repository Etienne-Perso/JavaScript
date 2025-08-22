class Animal{

    constructor(color){
        this.color=color
    }
    printColor(){
        console.log(this.color)
    }
}

class Dog extends Animal{

    constructor(color, food){
        super(color)
        this.food=food
    }

    display(){
        this.printColor()
        console.log("Eating:",this.food)
    }
}

let dog=new Dog("Brown", "Meat")
dog.display()