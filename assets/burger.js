let icon = document.getElementById("icon")
let burger = document.getElementById("burger")
let side = document.getElementById("side")
icon.onclick=function(){
    //side.classList.remove("side")
    side.classList.add("hide")
}
burger.onclick=function(){
    side.classList.remove("hide")
}