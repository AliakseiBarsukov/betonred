const cookies = document.querySelector(".cookis");
const cookisBtn = document.querySelector(".cookis__btn");

cookisBtn.addEventListener("click", () => {
  cookies.style.display = "none";
});

const preloader = document.querySelector(".preloader");

setTimeout(() => {
  preloader.style.display = "none";
}, 5000);


const spinBtn = document.querySelector(".spin__btn");
const imgSpin = document.querySelector(".img__spin-js");
const textSpin = document.querySelector(".text__spin");
const spinWin = document.querySelector(".spin__win");

spinBtn.addEventListener("click", () => {
  imgSpin.classList.toggle("spin_animation");
  setTimeout(() => {
    imgSpin.style.display = "none";
    spinBtn.style.display = "none";
    textSpin.style.display = "flex";
    spinWin.style.display = "block";
  },3000)
})  