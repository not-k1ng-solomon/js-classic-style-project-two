import {addDot,loadingWithoutForm} from "./uploadControl";

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
            addDot(input);
            if (input.closest('form') === null) {
                let api = 'assets/server.php';
                loadingWithoutForm(api, input);
            }
        });
    });
};

export default drop;