let calculator = (() => {
  let _storingValues = [];
  let _total = 0;

  const getOperations = {
    sum: (num1, num2) => num1 + num2,
    sub: (num1, num2) => num1 - num2,
    mult: (num1, num2) => num1 * num2,
    divs: (num1, num2) => num1 / num2,
  };

  const _callDom = () => {
    const input = document.querySelector("#entryValue");
    const radio = document.querySelector('input[type="radio"]');
    const operacao = document.querySelector('input[type="radio"]:checked');
    const totalSpan = document.querySelector("span");
    const modalSucess = document.querySelector(".modal-sucess");
    return {
      input,
      radio,
      operacao,
      totalSpan,
      modalSucess
    };
  };

  const _getInputValue = () => {
    let input = _callDom().input;
    return +input.value;
  };

  const clearInput = () => {
    let input = _callDom().input;
    input.value = "";
  };

  const storage = () => {
    if (_getInputValue() !== 0) {
      _storingValues = [..._storingValues, _getInputValue()];
    }
    return _storingValues;
  };

  const _resetStorage = () => (_storingValues = []);

  const _operation = () => {
    _total = storage().reduce(getOperations[_callDom().operacao.value]);
    _callDom().radio.checked = true;
    return _total;
  };

  const _openResult = () => _callDom().modalSucess.className = "modal-sucess --is-sucess";
  const _closeModalSucess = () => _callDom().modalSucess.classList.remove("--is-sucess");
  const _returnSucess = () => setTimeout(function () {
    _closeModalSucess()
  }, 2000);

  const equals = () => {
    _callDom().totalSpan.innerHTML = "Total: " + _operation();
    _openResult();
    _returnSucess();
    _callDom().radio.checked = false;
    _resetStorage();
  };

  return {
    storage,
    equals,
    clearInput,
  };
})();
