const display = document.querySelector(".display");

function appendToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    let expression = display.value
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-");

    const result = math.evaluate(expression);

    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
