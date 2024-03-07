const buttonMore = document.querySelector(".main-button-more");
const listMainMenu = document.querySelector(".main-menu-list");
const listItems = document.querySelectorAll(".main-menu-item");
console.log(listItems)

let flag = true;

buttonMore.addEventListener("click", () => {
  console.log("click!");
  if (flag) {
    listMainMenu.style.opacity = "100";
    buttonMore.innerHTML = "Закрыть содержимое";
    buttonMore.style.transform = "translate(0, 130px)";
    flag = false;
  } else {
    listMainMenu.style.opacity = "0";
    buttonMore.innerHTML = "Открыть содержимое";
    buttonMore.style.transform = "translate(0, 0)";
    flag = true;
  }
});
