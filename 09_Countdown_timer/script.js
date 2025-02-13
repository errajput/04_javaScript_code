const startCountDown = () => {
  //   console.log("cliked");

  const timeInput = document.getElementById("timeInput").value;

  const timer = document.getElementById("timer");
  const timeRemaining = parseInt(timeInput);
  //   console.log(typeof timeRemaining);
  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    timer.textContent = "Please enter a valid number ";
  } else {
    timer.textContent = ` Time left ${timeRemaining} second`;
  }
  for (let i = timeRemaining; i >= 0; i--) {
    (function (count) {
      setTimeout(() => {
        if (count > 0) {
          timer.textContent = `Time left ${count} second`;
        } else {
          timer.textContent = "time out";
        }
      }, (timeRemaining - count) * 100);
    })(i);
  }
};

document
  .getElementById("startButton")
  .addEventListener("click", startCountDown);
