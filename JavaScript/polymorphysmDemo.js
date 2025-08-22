class Shape{
    draw(){
        console.log("I am a generic shape")
    }
}

class Square extends Shape{
    draw(){
        console.log("I am a square")
    }
}

class Circle extends Shape{
    draw(){
        console.log("I am a circle")
    }
}

let s = new Shape()
s.draw() //I am a generic shape

s=new Square()
s.draw()// I am a square

s=new Circle()
s.draw() //I am a circle