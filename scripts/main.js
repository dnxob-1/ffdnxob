const confettiClick = document.getElementById("confettiClick");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettis = [];
let animationFrame;
let isFading = false;

function createConfetti() {
  const colors = [
    "#f94144",
    "#f3722c",
    "#f8961e",
    "#f9c74f",
    "#90be6d",
    "#43aa8b",
    "#577590",
  ];
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 5 + 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 3 + 2,
    opacity: 1,
  };
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettis.forEach((confetti, index) => {
    ctx.fillStyle = confetti.color;
    ctx.globalAlpha = confetti.opacity;
    ctx.beginPath();
    ctx.arc(confetti.x, confetti.y, confetti.size, 0, Math.PI * 2);
    ctx.fill();

    confetti.y += confetti.speed;
    if (isFading) {
      confetti.opacity -= 0.02;
      if (confetti.opacity <= 0) {
        confettis.splice(index, 1);
      }
    }

    if (confetti.y > canvas.height) confettis.splice(index, 1);
  });
  if (confettis.length < 200) confettis.push(createConfetti());

  animationFrame = requestAnimationFrame(drawConfetti);

  setTimeout(() => {
    cancelAnimationFrame(animationFrame);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettis.length = 0;
  }, 5000);
}

function changeHeaderByTime() {
  const introHeader = document.getElementById("introHeader");

  var timeDay = new Date();
  var currentHr = timeDay.getHours();
  var textGreeting;

  if (currentHr >= 5 && currentHr < 12) {
    textGreeting = "Good Morning";
  } else if (currentHr >= 12 && currentHr < 17) {
    textGreeting = "Good Afternoon";
  } else {
    textGreeting = "Good Evening";
  }
  introHeader.textContent = textGreeting;
}

function alertExit() {
  alert("This will open a new site.");
}

confettiClick.addEventListener("mouseover", drawConfetti);
changeHeaderByTime();
