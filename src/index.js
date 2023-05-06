import "./styles.css";
// Get the elements
const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerText;

    if (buttonText === "AC") {
      input.value = "";
    } else if (buttonText === "DEL") {
      input.value = input.value.slice(0, -1);
    } else if (buttonText === "=") {
      try {
        input.value = eval(input.value);
      } catch (e) {
        input.value = "Error";
      }
    } else {
      input.value += buttonText;
    }
  });
});
