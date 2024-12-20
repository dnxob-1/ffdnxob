function darkOn() {
  document
    .querySelectorAll(
      "body, h1, h2, h3, h4, p, a, li, button, input, section, div, img",
    )
    .forEach((element) => {
      element.style.backgroundColor = "#121212";
      element.style.color = "#ffffff";
      if (
        element.id === "mathLink" ||
        element.id === "physicsLink" ||
        element.id === "japLink" ||
        element.id === "csLink" ||
        element.id === "extraThings"
      ) {
        element.style.color = "#ffffff";
        element.addEventListener("mouseover", function () {
          element.style.color = "#bb86fc";
        });
        element.addEventListener("mouseout", function () {
          element.style.color = "#ffffff";
        });
      } else if (element.id === "socials") {
        element.addEventListener("mouseover", function () {
          element.style.backgroundColor = "#45a049";
        });
        element.addEventListener("mouseout", function () {
          element.style.backgroundColor = "#121212";
        });
      } else if (element.id === "navi2" || element.id === "arrImg") {
        element.style.backgroundColor = "#121212";
        element.style.borderColor = "white";
      } else if (
        element.id === "goBack" ||
        element.id === "goBackToTop" ||
        element.id === "downloadArchIso"
      ) {
        element.style.borderColor = "#121212";
      }
    });
}

function darkOff() {
  document
    .querySelectorAll(
      "body, h1, h2, h3, h4, p, a, li, button, input, section, div",
    )
    .forEach((element) => {
      element.style.backgroundColor = "";
      element.style.color = "";
      if (element.tagName === "A") {
        element.style.color = "";
      }
    });
}

function darkMode() {
  const enDark = document.getElementById("enDark");
  const theFaviCon = document.getElementById("theFaviCon");
  const mainFaviCon = document.getElementById("mainFaviCon");

  window.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      darkOn();
      if (mainFaviCon) {
        mainFaviCon.href = "images/favicon2.png";
      } else if (theFaviCon) {
        theFaviCon.href = "../images/favicon2.png";
      }
      if (enDark) enDark.checked = true;
    } else {
      darkOff();
      if (mainFaviCon) {
        mainFaviCon.href = "images/favicon1.png";
      } else if (theFaviCon) {
        theFaviCon.href = "../images/favicon1.png";
      }
      if (enDark) enDark.checked = false;
    }
  });

  if (enDark) {
    enDark.addEventListener("change", () => {
      if (enDark.checked) {
        darkOn();
        localStorage.setItem("theme", "dark");
      } else {
        darkOff();
        localStorage.setItem("theme", "light");
      }
    });
  }
}

function copyOn() {
  document
    .querySelectorAll(
      "body, h1, h2, h3, h4, p, a, li, button, input, section, div",
    )
    .forEach((element) => {
      element.style.userSelect = "text";
    });
  console.log("Copying is turned on");
}

function copyOff() {
  document
    .querySelectorAll(
      "body, h1, h2, h3, h4, p, a, li, button, input, section, div",
    )
    .forEach((element) => {
      element.style.userSelect = "none";
    });
  console.log("Copying is turned off");
}

function copyEn() {
  const enCopy = document.getElementById("enCopy");

  window.addEventListener("DOMContentLoaded", function () {
    const copyState = localStorage.getItem("copyState");
    if (copyState === "on") {
      copyOn();
      if (enCopy) enCopy.checked = true;
    } else {
      copyOff();
      if (enCopy) enCopy.checked = false;
    }
  });

  if (enCopy) {
    enCopy.addEventListener("change", () => {
      if (enCopy.checked) {
        copyOn();
        localStorage.setItem("copyState", "on");
      } else {
        copyOff();
        localStorage.setItem("copyState", "off");
      }
    });
  }
}

function displayOthers() {
  volSet.style.display = "flex";
  setVal.style.display = "flex";
  selectMusic.style.display = "flex";
  volume.style.display = "flex";
}

function removeOthers() {
  volSet.style.display = "none";
  setVal.style.display = "none";
  selectMusic.style.display = "none";
  volume.style.display = "none";
}

function musicOn() {
  const music = document.getElementById("music");
  const volSet = document.getElementById("volSet");
  const setVal = document.getElementById("setVal");
  const volume = document.getElementById("volume");
  var mainAudio = document.getElementById("mainAudio");
  const musicInput = document.getElementById("musicInput");
  const playMusicBut = document.getElementById("playMusicBut");
  const musicState = localStorage.getItem("musicState");
  let selectedFile = null;

  window.addEventListener("DOMContentLoaded", function () {
    if (music) {
      if (musicState === "working") {
        displayOthers();
        console.log("Music is on");
        music.checked = true;
        mainAudio.play();
      } else {
        removeOthers();
        music.checked = false;
        console.log("Music is not on");
      }

      music.addEventListener("change", () => {
        if (music.checked) {
          mainAudio.play();
          mainAudio.volume = volSet.value / 100;
          displayOthers();
          localStorage.setItem("musicState", "working");
        } else {
          mainAudio.pause();
          mainAudio.currentTime = 0;
          removeOthers();
          localStorage.setItem("musicState", "not");
        }
      });
    }

    if (volSet) {
      const savedVolume = localStorage.getItem("volume") || 0.5;
      mainAudio.volume = savedVolume;
      volSet.value = savedVolume * 100;

      volSet.addEventListener("change", () => {
        mainAudio.volume = volSet.value / 100;
        localStorage.setItem("volume", volSet.value / 100);
        if (setVal) {
          setVal.textContent = `${volSet.value}%`;
        }
      });
    }

    if (musicInput) {
      musicInput.addEventListener("change", () => {
        const files = musicInput.files;
        if (files.length > 0) {
          selectedFile = files[0];
          console.log(`Selected File: ${selectedFile.name}`);
          console.log(`File Size: ${selectedFile.size} bytes`);
          console.log(`File Type: ${selectedFile.type}`);
        }
      });
    }

    if (playMusicBut) {
      playMusicBut.addEventListener("click", () => {
        console.log(selectedFile);
        if (selectedFile) {
          const fileURL = URL.createObjectURL(selectedFile);
          mainAudio.src = fileURL;
          mainAudio.play();
          console.log("Successfully playing file");
        } else {
          console.log("No file selected");
        }
      });
    }
  });
}

function runChanger(font) {
  document.querySelectorAll("*").forEach((element) => {
    element.style.fontFamily = font;
  });
  console.log(`Current font: ${font}`);
}

function saveFont(font) {
  localStorage.setItem("font", font);
  runChanger(font);
}

function changeFont() {
  const savedFont = localStorage.getItem("font") || "Arial"; // Default font
  runChanger(savedFont);

  const fontSelector = document.getElementById("fontSelector");
  if (fontSelector) {
    fontSelector.value = savedFont;
    fontSelector.addEventListener("change", () => {
      const selectedFont = fontSelector.value;
      saveFont(selectedFont);
    });
  }
}

darkMode();
copyEn();
musicOn();
window.addEventListener("DOMContentLoaded", changeFont());
