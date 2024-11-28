const allAnchors = document.querySelectorAll("a");

allAnchors.forEach((anchor) => {
  if (
    anchor.id === "downloadArchIso" ||
    anchor.id === "goBack" ||
    anchor.id === "goBackToTop"
  )
    return;

  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const textToCopy = anchor.textContent.trim();

    if (textToCopy) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert(`Copied: "${textToCopy}"`);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      alert("No text found.");
    }
  });
});

const goBackToTop = document.getElementById("goBackToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    goBackToTop.style.display = "block";
  } else {
    goBackToTop.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
