document.getElementById("demo1").innerHTML = "This is dynamic text message"
document.getElementById("demo2").innerHTML = "Hello, welcome to JavaScript session..!"
document.getElementById("btn").onclick = displayDate

function displayDate() {
    document.getElementById("mydate").innerHTML = Date()
}