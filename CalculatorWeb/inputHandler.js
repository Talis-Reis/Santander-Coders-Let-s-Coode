let _storingValues = [];

const getOperations = {
  sum: (num1, num2) => num1 + num2,
  sub: (num1, num2) => num1 - num2,
  mult: (num1, num2) => num1 * num2,
  divs: (num1, num2) => num1 / num2,
};

_getInputValue = () => {
  const input = document.querySelector("#entryValue");
  return +input.value;
};

_clearInput = () => {
  const input = document.querySelector("#entryValue");
  input.value = "";
};

_storage = () => {
  if (_getInputValue() !== 0) {
    _storingValues = [..._storingValues, _getInputValue()];
  }
  return _storingValues;
};

_resetStorage = () => (_storingValues = []);

_operation = () => {
  const operacao = document.querySelector('input[type="radio"]:checked').value;
  document.querySelector('input[type="radio"]').checked = true;
  let total = 0;
  total = _storage().reduce(getOperations[operacao]);
  return total;
};

_openResult = () =>
  (document.querySelector(".modal-sucess").className =
    "modal-sucess --is-sucess");
_closeModalSucess = () =>
  document.querySelector(".modal-sucess").classList.remove("--is-sucess");
_returnSucess = () =>
  setTimeout(function () {
    _closeModalSucess();
  }, 2000);

_equals = () => {
  const totalSpan = document.querySelector("span");
  totalSpan.innerHTML = "Total: " + _operation();
  _openResult();
  _returnSucess();
  document.querySelector('input[type="radio"]').checked = false;
  _resetStorage();
};
