document.getElementById("checkbutton").addEventListener("click", function () {
  const result = document.getElementById("res");
  const age = parseInt(document.getElementById("age").value);
  result.innerHTML = "";
  if (isNaN(age) || age < 0) {
    result.innerHTML = "please enter a valid age      ";
    return;
  }

  if (age >= 18) {
    result.innerHTML += "Your are eligible to vote <br/>";
  } else {
    result.innerHTML += "Your are not eligible to vote <br/>";
  }
  if (age >= 21) {
    result.innerHTML += "Your are eligible to drink alcohol <br/>";
  } else {
    result.innerHTML += "Your are not eligible to drink alcohol <br/>";
  }
  if (age >= 16) {
    result.innerHTML += "Your are eligible to drive <br/>";
  } else {
    result.innerHTML += "Your are not eligible to drive <br/>";
  }
});
