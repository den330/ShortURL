const input = document.querySelector("input");
const resultLabel = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  resultLabel.textContent = input.value;
});
