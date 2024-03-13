const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let isDraw = false;

const colors = {
  black: document.querySelector(".black"),
  red: document.querySelector(".red"),
  blue: document.querySelector(".blue"),
  green: document.querySelector(".green"),
  gray: document.querySelector(".gray"),
  pink: document.querySelector(".pink"),
  purple: document.querySelector(".purple"),
  yellow: document.querySelector(".yellow"),
  eraser: document.querySelector(".white"),
};

let currentColor;
const sizeBrushs = {
  7: document.querySelector(".small-size-brush"),
  17: document.querySelector(".medium-size-brush"),
  25: document.querySelector(".large-size-brush"),
};

let currentSizeBrush = 7;
let previousBrush;

Object.values(colors).forEach((color) => {
  color.addEventListener("click", () => {
    currentColor = color.className;

    Object.values(colors).forEach((c) => {
      if(c.className === currentColor) {
        c.classList.add("active-size");
      } else {
        c.classList.remove("active-size");
      }
    });
  });
});

Object.values(sizeBrushs).forEach((size) => {
  size.addEventListener("click", () => {
    const key = Object.keys(sizeBrushs).find((k) => sizeBrushs[k] === size);

    currentSizeBrush = key;
    console.log(currentSizeBrush);

    if (previousBrush) {
      previousBrush.classList.remove("active-size");
    }

    currentSizeBrush = key;
    size.classList.add("active-size");

    previousBrush = size;
  });
});

canvas.addEventListener("mousedown", (e) => {
  isDraw = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

canvas.addEventListener("mousemove", (e) => {
  if (isDraw) {
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = currentSizeBrush;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", (e) => {
  isDraw = false;
});
