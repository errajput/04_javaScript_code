const calculator = (weight, height) => {
  let bmi = weight / (height * height);
  let status;
  if (bmi < 18.5) {
    status = "Under weigth";
  } else if (bmi < 24.9) {
    status = "Normal weight";
  } else if (bmi < 29.9) {
    status = "overweight";
  } else {
    status = "obessed";
  }
  return status;
};
const bmiResult = calculator(85, 1.75);
