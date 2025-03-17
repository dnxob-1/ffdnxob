const arrImg = document.getElementById("arrImg");
const navi = document.getElementById("navi2");
const projListLink = document.getElementById("projListLink");
const gallLink = document.getElementById("gallLink");
const goBack = document.getElementById("goBack");
let isNaviOpen = false;

async function openNavi() {
  navi.style.width = "20%";
  navi.style.marginLeft = "0";
  arrImg.style.left = 200;
  arrImg.src = "";
  arrImg.src = "../assets/back.png";
  isNaviOpen = true;
  projListLink.style.display = "block";
  gallLink.style.display = "block";
  goBack.style.display = "block";
  navi.style.transitionDelay = "0.5";
}

function closeNavi() {
  navi.style.width = "0";
  navi.style.marginLeft = "0";
  projListLink.style.display = "none";
  gallLink.style.display = "none";
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
