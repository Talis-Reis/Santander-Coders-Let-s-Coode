const promise = (() => {
    const buttonGenerateArrayList = document.querySelector('.generate-list');
    const buttonClearArrayList = document.querySelector('.clear-list')
    const arrayList = document.querySelector('ul');
    const promiseResponseTime = document.querySelector('#promise_response')

    const generateRandomArray = () => {
        return Array.from({
                length: Math.random() * 20
            },
            () => Math.floor(Math.random() * 20));
    }

    const dalayTimer = () => {
        return promiseResponseTime.value;
    }
    const showArrayList = array => {
        const showArrayElement = document.createElement('li');
        arrayList.appendChild(showArrayElement)
        showArrayElement.innerText = array
    }

    buttonGenerateArrayList.onclick = () => {
        Promise.allSettled([new Promise((data, reject) => setTimeout(data, dalayTimer(), generateRandomArray()))]).
        then((data) => {
            data.forEach(array => {
                showArrayList(array.value);
            })
        });
    }

    buttonClearArrayList.onclick = () => {
        const removerList = document.querySelector('ul')
        removerList.innerHTML = '';
    }
})();