const mask = (selection) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus();
        elem.selectionStart = elem.value.length;
        elem.scrollLeft = elem.scrollWidth;
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    function createMask(event) {
        let matrix = '+7 (___) ___-__-__',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');
        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length === 2) {
                this.value = "";
            }
        } else {

            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selection);
    inputs.forEach(item => {
        item.addEventListener('input', createMask);
        item.addEventListener('focus', createMask);
        item.addEventListener('blur', createMask);
        item.addEventListener('click', function () {
            this.setSelectionRange(this.value.length, this.value.length);
        });
    });
};

export default mask;