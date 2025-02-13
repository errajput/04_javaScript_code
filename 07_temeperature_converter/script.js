document.getElementById("convertButton").addEventListener("click", function () {
  const temperature = parseInt(document.getElementById("tempInput").value);
  //   console.log(temperature);

  const conversionType = document.getElementById("conversionType").value;
  const result = document.getElementById("result");
  result.innerHTML = "";
  if (isNaN(temperature)) {
    result.innerHTML = "Please enter a valid number of temperature";
    return;
  }
  let convertedTemp;
  if (conversionType === "toCelsius") {
    convertedTemp = (temperature - 32) * (5 / 9);
    result.innerHTML = `${temperature}F is equal to the ${convertedTemp.toFixed(
      2
    )}C`;
  } else if (conversionType === "toFahrenheit") {
    convertedTemp = temperature * (5 / 9) + 32;
    result.innerHTML = `${temperature}C is equal to the ${convertedTemp.toFixed(
      2
    )}F`;
  }
});
