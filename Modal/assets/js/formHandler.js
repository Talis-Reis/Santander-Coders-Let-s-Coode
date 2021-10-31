const model = (() => {

    const _form = document.querySelector("form")
    const _fields = document.querySelector(".fields")

    const _modal = document.querySelector(".modal")
    const _load = document.querySelector(".load")
    const _modalSucess = document.querySelector(".modal-sucess")

    const buttonOpenModalRegistration = document.querySelector("#buttonOpen")
    const buttonCloseModalRegistration = document.querySelector("#buttonClose")

    let resultForm = []

    const inputFields = [{
            'type': 'text',
            'name': 'name',
            'placeholder': 'Name:',
            'required': true
        },
        {
            'type': 'text',
            'name': 'lastname',
            'placeholder': 'Lastname:',
            'required': true
        },
        {
            'type': 'text',
            'name': 'email',
            'placeholder': 'Email:',
            'required': false
        },
        {
            'type': 'text',
            'name': 'address',
            'placeholder': 'Address:',
            'required': true
        },
        {
            'type': 'text',
            'name': 'district',
            'placeholder': 'District:',
            'required': true
        },
        {
            'type': 'text',
            'name': 'number',
            'placeholder': 'Number:',
            'required': true
        }
    ]

    const openRegistrationModal = () => _modal.className = "modal --is-open"
    const closeRegistrationModal = () => _modal.classList.remove('--is-open')
    const resetForm = () => _form.reset()
    const openModalOfLoading = () => _load.className = "load --is-load"
    const closeModalOfLoading = () => _load.classList.remove('--is-load')
    const openModalOfSuccess = () => {
        _modalSucess.className = "modal-sucess --is-sucess", returnSuccess()
    }
    const closeModalSucess = () => _modalSucess.classList.remove('--is-sucess')

    const returnFormSuccess = () => setTimeout(function () {
        closeModalOfLoading(), openModalOfSuccess()
    }, 3000);

    const returnSuccess = () => setTimeout(function () {
        closeModalSucess()
    }, 2000);


    function createInputElement(param) {
        let input = document.createElement('Input')
        input.type = param.type
        input.name = param.name
        input.placeholder = param.placeholder
        input.required = param.required

        return input
    }

    function createLabelElement(param) {
        let label = document.createElement('Label')
        label.innerText = param.name[0].toUpperCase() + param.name.slice(1) + ':'
        return label
    }

    function assignCreatedElementsToModal() {
        _fields.innerHTML = ""
        for (let valueField of inputFields) {
            _fields.appendChild(createLabelElement(valueField))
            _fields.appendChild(createInputElement(valueField))
        }
    }

    buttonOpenModalRegistration.onclick = function () {
        openRegistrationModal();
        assignCreatedElementsToModal();
    }

    buttonCloseModalRegistration.onclick = function () {
        closeRegistrationModal();
        resultForm = [...resultForm, 'Cliente cancelou o cadastro!']
        console.log('Cliente cancelou o cadastro!')
        console.log(`Quantidade de cancelamento: ${resultForm.length}`)
    }

    _form.onsubmit = function (event) {
        event.preventDefault()
        const registryValues = [..._fields.querySelectorAll("input")]
            .map(input => ({
                'key': input.name,
                'value': input.value
            }))
        console.log(registryValues);
        closeRegistrationModal()
        resetForm()
        openModalOfLoading()
        returnFormSuccess()

    }
})()