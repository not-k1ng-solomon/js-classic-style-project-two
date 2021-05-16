import {postData} from "../services/requests";

const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highLight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0,0.7)";
    }

    function unHighLight(item) {
        item.closest('.file_upload').style.border = "none";
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = "#fff";
        } else {
            item.closest('.file_upload').style.backgroundColor = "#ededed";
        }
    }

    let defaultBG = null;

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => {
                highLight(input);
            }, false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => {
                unHighLight(input);
            }, false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            if (input.closest('form') === null) {
                const formData = new FormData();
                formData.append('upload', input.files[0]);
                let api = 'assets/server.php';
                let div = input.previousElementSibling;
                postData(api, formData)
                    .then(res => {
                        console.log(res);
                        div.previousElementSibling.textContent = 'Фотография загружена';
                    })
                    .catch(() => {
                        div.previousElementSibling.textContent = 'Ошибка';
                    });
                console.log(formData);
            } else console.log('asd');
        });
    });

    function addDot(item) {
        let dots;
        const arr = item.files[0].name.split('.');
        arr[0].length > 6 ? dots = '...' : dots = '.';

        const name = arr[0].substring(0, 6) + dots + arr[1];
        let div = item.previousElementSibling;
        div.textContent = name;
        div.previousElementSibling.textContent = 'Изменить фотографию';
    }


};

export default drop;