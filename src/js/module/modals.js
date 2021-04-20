const modals = () => {
    var validateFormFlag = true;

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, options = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            window = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        const windowClosed = () => {
            window.forEach(item => {
                item.style.display = 'none';
            });
            document.body.style.overflowY = '';
            document.body.style.marginRight = '0px';
        };

        const owerflowHidden = () => {
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        };
        trigger.forEach(item => {

            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                windowClosed();
                modal.style.display = 'block';
                owerflowHidden();
                /*                if (options === false) {
                                    windowClosed();
                                    modal.style.display = 'block';
                                    owerflowHidden();
                                } else {
                                    validateForm(state,options);
                                    if (validateFormFlag) {
                                        windowClosed();
                                        modal.style.display = 'block';
                                        owerflowHidden();
                                    }
                                }*/
            });

        });

        close.addEventListener('click', () => {
            windowClosed();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windowClosed();
            }
        })
    }

    /*    async function validateForm(state, keys) {
            validateFormFlag = true;
            await keys.some(item => {
                if (!(item in state)) {
                    validateFormFlag = false;
                }
            });
        }*/

    function showModalByTyme(selector, time) {
        setTimeout(() => {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block'
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                owerflowHidden();
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.append(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();

        return scrollWidth;
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    // showModalByTyme('.popup-consultation', 5000);
};


export default modals;