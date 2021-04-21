const checkTextInput = (selector) => {
    const txtInput = document.querySelectorAll(selector);

    txtInput.forEach(item => {
        item.addEventListener('keypress', (e)=>{
            if(e.key.match(/[^а-яё 0-9]/ig)){
                e.preventDefault();
            }
        });
    });
};

export default checkTextInput;