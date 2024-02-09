const temp = document.getElementById("temp");
const temp_diff = document.getElementById("temp_diff");
const result = document.getElementById("result-temp");
const error = document.querySelector(".error");
const equation = document.getElementById("equation");

function convertTemp() {
  if (temp.value != "") {
    error.style.display = "none";
    error.innerHTML = "";
    if (temp_diff.value == "celcius") {
      result.innerHTML = `${
        (parseFloat(temp.value) * 9) / 5 + 32
      }&deg; Fahrenheit`;
    } else {
      result.innerHTML = `${(((parseFloat(temp.value) - 32) * 5) / 9).toFixed(
        2
      )}&deg; Celcius`;
    }
  } else {
    error.style.display = "block";
    error.innerHTML = "Please enter temperature value";
    result.innerHTML = "--";
  }
  if (equation.style.display === "block") {
    equation.style.display = "none";
    return;
  }
}
function showEquation() {
  if (equation.style.display === "block") {
    equation.style.display = "none";
    return;
  }
  if (temp.value == "") {
    return;
  }
  if (temp_diff.value == "celcius") {
    document.getElementById(
      "equation"
    ).innerHTML = `Celsius to Fahrenheit: ${temp.value} x 9/5 + 32 = ${result.innerHTML}`;
  } else {
    document.getElementById(
      "equation"
    ).innerHTML = `Fahrenheit to Celsius: (${temp.value} - 32) x 5/9 = ${result.innerHTML}`;
  }
  equation.style.display = "block";
}
