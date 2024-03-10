const headerPhoto = document.querySelector(".header-photo");
const changePhotoButton = document.querySelector(".name-list-header-photo");
const changePhotoButtonMore = document.querySelector(
  ".list-header-change-photo-more"
);

let buttonVisible = false;
let moreVisible = false;

const avatar = document.querySelector(".img-avatar");

const buttonMoreFunctions = document.querySelector(".other-functions-profile");

headerPhoto.addEventListener("mouseenter", () => {
  changePhotoButton.style.opacity = "100";
  changePhotoButton.style.visibility = "visible";
  buttonVisible = true;
  moreVisible = false;
});

headerPhoto.addEventListener("mouseleave", () => {
  changePhotoButton.style.opacity = "0";
  changePhotoButton.style.visibility = "hidden";
  changePhotoButtonMore.style.opacity = "0";
  changePhotoButtonMore.style.visibility = "hidden";
  buttonVisible = false;
  moreVisible = false;
});

changePhotoButton.addEventListener("mouseenter", () => {
  changePhotoButtonMore.style.opacity = "100";
  changePhotoButtonMore.style.visibility = "visible";
});

changePhotoButton.addEventListener("mouseleave", () => {
  changePhotoButtonMore.style.opacity = "0";
  changePhotoButtonMore.style.visibility = "hidden";
});

changePhotoButtonMore.addEventListener("mouseenter", () => {
    changePhotoButtonMore.style.opacity = "100";
    changePhotoButtonMore.style.visibility = "visible";
  
});
changePhotoButtonMore.addEventListener("mouseleave", () => {
    changePhotoButtonMore.style.opacity = "0";
    changePhotoButtonMore.style.visibility = "hidden";
  
});
