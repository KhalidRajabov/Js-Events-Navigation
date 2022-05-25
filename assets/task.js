let div = document.querySelector("#div");

window.addEventListener("load", () => {
  div.style.position = "absolute";
  div.style.left = 0;
  div.style.top = 0;
});
swal ( "WASD ve ya arrow keylei ile hereket et" ,   "" )
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
    case `a`:
      div.style.left = parseInt(div.style.left) - 15 + "px";
      break;
    case "ArrowRight":
    case `d`:
      div.style.left = parseInt(div.style.left) + 15 + "px";
      break;
    case "ArrowUp":
    case `w`:
      div.style.top = parseInt(div.style.top) - 15 + "px";
      break;
    case "ArrowDown":
    case `s`:
      div.style.top = parseInt(div.style.top) + 15 + "px";
      break;
    default:
        swal ( "Bashqa duymeleri basma" ,  "" ,  "error" )

  }
});