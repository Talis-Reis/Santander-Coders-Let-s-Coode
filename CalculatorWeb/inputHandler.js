function getInputValue() {
  const input = document.querySelector("#entryValue");
  return +input.value;
}

let storingValues = [];
function storage() {
  if (getInputValue() !== 0) {
    storingValues = [...storingValues, getInputValue()];
  }
  return storingValues;
}

function clearInput() {
  const input = document.querySelector("#entryValue");
  input.value = "";
}

const getOperations = {
  sum: (num1, num2) => num1 + num2,
  sub: (num1, num2) => num1 - num2,
  mult: (num1, num2) => num1 * num2,
  divs: (num1, num2) => num1 / num2,
};

function operation() {
  let calculo = storage();
  const operacao = document.querySelector('input[type="radio"]:checked').value;
  console.log(calculo);
  console.log(operacao);
  let total = 0;
  total = storage().reduce(getOperations[operacao]);
  return total;
}

function resetStorage() {
  storingValues = [];
}

function resetResult() {
  storingValues = [];
  document.querySelector("span").innerHTML = "Total: " + storingValues;
}

function equals() {
  const totalSpan = document.querySelector("span");
  totalSpan.innerHTML = "Total: " + operation();
  resetStorage();
}
