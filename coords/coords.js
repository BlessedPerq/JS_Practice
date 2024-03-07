document.addEventListener("mousemove", (event) => {
  let x = event.clientX;
  let y = event.clientY;

  const coordx = document.querySelector(".coord-x");
  const coordy = document.querySelector(".coord-y");

  coordx.innerHTML = `coord x: ${x}`;
  coordy.innerHTML = `coord y: ${y}`;
});
