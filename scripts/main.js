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

changeHeaderByTime();
