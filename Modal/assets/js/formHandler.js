const _modal = document.querySelector(".modal")
const _load = document.querySelector(".load")
const _modalSucess = document.querySelector(".modal-sucess")
const _form = document.querySelector("#form_cliente")
const _inputName = document.querySelector("input[name=name]")
const _inputSobrenome = document.querySelector("input[name=sobrenome]")
const _inputEmail = document.querySelector("input[name=email]")
const _inputEndereco = document.querySelector("input[name=endereco]")
const _inputBairro = document.querySelector("input[name=bairro]")
const _inputNumero = document.querySelector("input[name=numero]")

let formClient = null
let resultForm = []

const buttonOpen = document.querySelector("#buttonOpen")
const buttonClose = document.querySelector("#buttonClose")

buttonOpen.onclick = function () {
    _openModel();
}

buttonClose.onclick = function () {
    _closeModel();
    resultForm = [...resultForm, 'Cliente cancelou o cadastro!']
    console.log('Cliente cancelou o cadastro!')
    console.log(`Quantidade de cancelamento: ${resultForm.length}`)
}

_openModel = () => _modal.className = "modal --is-open"
_closeModel = () => _modal.classList.remove('--is-open')
_openLoad = () => _load.className = "load --is-load"
_closeLoad = () => _load.classList.remove('--is-load')
_openModalSucess = () => {_modalSucess.className = "modal-sucess --is-sucess", _returnSucess()}
_closeModalSucess = () => _modalSucess.classList.remove('--is-sucess')
_resetForm = () => _form.reset()
_returnSucess = () => setTimeout(function(){ _closeModalSucess()}, 2000);
_returnFormSucess = () => setTimeout(function(){ _closeLoad(), _openModalSucess()  }, 3000);

_form.onsubmit = function (event) {
    event.preventDefault()
    formClient = {
        "Name ": _inputName.value,
        "Sobrenome": _inputSobrenome.value,
        "Email ": _inputEmail.value,
        "Endereço": _inputEndereco.value,
        "Bairro": _inputBairro.value,
        "Numero": _inputNumero.value
    };
    console.log(formClient)
    _closeModel()
    _resetForm()
    _openLoad();
    _returnFormSucess();

}
