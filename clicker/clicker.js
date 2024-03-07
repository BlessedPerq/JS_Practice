const buttonPlus = document.querySelector(".button-plus");
const buttonMinus = document.querySelector(".button-minus");
const countClicks = document.querySelector(".count-clicks");
const attention = document.querySelector(".attention");

let count = 0;

buttonPlus.addEventListener("click", (event) => {
  if (count <= 4) {
    count++;
    countClicks.innerHTML = `Count of clicks: ${count}`;
    attention.innerHTML = " ";
  } else {
    setAttentionText("Max value");
  }
});
buttonMinus.addEventListener("click", (event) => {
  if (count >= -4) {
    count--;
    countClicks.innerHTML = `Count of clicks: ${count}`;
    attention.innerHTML = " ";
  } else {
    setAttentionText("Min value");
  }
});

function setAttentionText(text) {
  attention.innerHTML = text;

  setTimeout(() => {
    attention.innerHTML = "";
  }, 3000);
}
