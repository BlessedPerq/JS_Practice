document.addEventListener("mousemove", (event) => {
  const square = document.getElementById("square");
  let x = event.clientX;
  let transparency = x / 1900;
  square.style.opacity = transparency;
});
