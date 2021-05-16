// import checkNumberInputs from "./checkNumberInputs";
import {loadingWithoutForm} from "./uploadControl";
import {postData} from "../services/requests";

const forms = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]');
    // checkNumberInputs('input[name="user_phone"]');

    const message = {
        'loading': 'Загрузка...',
        'success': 'Спасибо! Скоро мы свяжемся',
        'failure': 'Что-то пошло не так...',
        'spinner': 'assets/img/spinner.gif',
        'ok': 'assets/img/ok.png',
        'fail': 'assets/img/fail.png',
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php',
    };

    const cleanInputs = () => {
        inputs.forEach(item => {
            item.value = "";
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };

    /*    const cleanForms = () => {
            forms.forEach(item => {
                item.reset();
            });

        };*/

    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log(item.files[0]);
            let dots;
            const arr = item.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            let div = item.previousElementSibling;
            div.textContent = name;
            div.previousElementSibling.textContent = 'Изменить фотографию';
            if (item.closest('form') === null) {
                let api = 'assets/server.php';
                loadingWithoutForm(api, item);
            }
        });
    });

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement("div");
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.closest('.calc_form') ? api = path.designer : api = path.question;
            if (item.closest('.calc_form')) {
                formData.append('calc-sum', document.querySelector('[data-calc-sum]').dataset.calcSum);
            }
            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent(message.failure);
                })
                .finally(() => {
                    cleanInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                        item.classList.add('fadeInUp');
                        item.querySelector('.file_upload button').textContent = 'Загрузить фотографию';
                    }, 5000);
                });
        });
    });
};

export default forms;