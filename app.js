const topBgMob = document.querySelector(".top-bg-mob");
const middleBgMob = document.querySelector(".middle-bg-mob");
const middleText = document.querySelector(".middle-text");
const creations = document.querySelector(".creations");
const wrapperBottom = document.querySelector(".wrapper-bottom");
const footer = document.querySelector(".footer");
const logo = document.querySelector(".logo");
const topButtons = document.querySelector(".top-buttons");


const menuH2 = document.querySelector(".menuH2");
const hamburger = document.getElementById("hamburger");
const seeAll = document.getElementById("seeAll");
const x = document.getElementById("x");


document.getElementById("hamburger").addEventListener("click", function(){
  topBgMob.style.display = "none"
  middleBgMob.style.display = "none"
  menuH2.style.display = "none"
  middleText.style.display = "none"
  creations.style.display = "none"
  seeAll.style.display = "none"
  footer.style.display = "none"

  logo.style.display = "block"
  x.style.display = "block"
  topButtons.style.display = "block"
})

document.getElementById("x").addEventListener("click", function(){
  topBgMob.style.display = "block"
  middleBgMob.style.display = "block"
  menuH2.style.display = "block"
  middleText.style.display = "block"
  creations.style.display = "block"
  seeAll.style.display = "block"
  seeAll.style.marginTop = "1380px"
  footer.style.display = "block"

  logo.style.display = "block"
  x.style.display = "none"
  topButtons.style.display = "none"
})



