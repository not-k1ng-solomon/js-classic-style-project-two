const calc = (size, material, option, promocode, result)=>{
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionBlock = document.querySelector(option),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);
    let sum = 0;

    let promocodeResult = 0;

    const promocodeUpdate = () =>{
        switch (promocodeBlock.value.trim()) {
            case 'IWANTPOPART': {
                promocodeResult = 0.3;
                break;
            }
            default:  promocodeResult = 0;
        }
        calcFunc();
    };

    const calcFunc = () => {
        sum = Math.round(((+sizeBlock.value) *  (+materialBlock.value) + (+optionBlock.value))*(1 - promocodeResult));

        if(materialBlock.value == "" || sizeBlock.value == ""){
            resultBlock.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        }else {
            resultBlock.textContent = `${sum} рублей`;
            resultBlock.dataset.calcSum = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', promocodeUpdate);
};

export default calc;