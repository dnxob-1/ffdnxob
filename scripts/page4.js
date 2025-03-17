const arrImg = document.getElementById("arrImg");
const navi = document.getElementById("navi2");
const exClassesLink = document.getElementById("exClassesLink");
const archInLink = document.getElementById("archInLink");
const upLink = document.getElementById("upLink");
const goBack = document.getElementById("goBack");
let isNaviOpen = false;

async function openNavi() {
  navi.style.width = "20%";
  navi.style.marginLeft = "0";
  arrImg.style.left = 200;
  arrImg.src = "";
  arrImg.src = "../assets/back.png";
  isNaviOpen = true;
  upLink.style.display = "block";
  exClassesLink.style.display = "block";
  archInLink.style.display = "block";
  goBack.style.display = "block";
  navi.style.transitionDelay = "0.5";
}

function closeNavi() {
  navi.style.width = "0";
  navi.style.marginLeft = "0";
  upLink.style.display = "none";
  exClassesLink.style.display = "none";
  archInLink.style.display = "none";
  goBack.style.display = "none";
  arrImg.style.left = 10;
  arrImg.src = "";
  arrImg.src = "../assets/next.png";
  isNaviOpen = false;
}

arrImg.addEventListener("click", () => {
  if (isNaviOpen) {
    closeNavi();
  } else {
    openNavi();
  }
});
