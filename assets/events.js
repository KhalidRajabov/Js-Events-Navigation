let input = document.getElementById("input")
input.addEventListener("focus", function(){
    console.log("focused");
    this.setAttribute("class", "def")
})
input.addEventListener("blur", function(){
    console.log("blurred"); 
    swal("You wrote: " + input.value);
})

input.addEventListener("keyup", function(){
    console.log(input.value);
})

 let cars = document.getElementById("cars")
cars.addEventListener("change", function(){
    console.log(cars.value);
})
console.log(cars.value);

let form = document.getElementById("form")
let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
document.onkeyup=function(e){
    console.log(e.keyCode);
}