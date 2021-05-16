import {postData} from "../services/requests";

const loadingWithoutForm = (api, input) =>{
    const formData = new FormData();
    formData.append('upload', input.files[0]);
    let div = input.previousElementSibling;
    postData(api, formData)
        .then(res => {
            console.log(res);
            div.previousElementSibling.textContent = 'Фотография загружена';
        })
        .catch(() => {
            div.previousElementSibling.textContent = 'Ошибка';
        });
};

const addDot = (item) =>{
    let dots;
    const arr = item.files[0].name.split('.');
    arr[0].length > 6 ? dots = '...' : dots = '.';

    const name = arr[0].substring(0, 6) + dots + arr[1];
    let div = item.previousElementSibling;
    div.textContent = name;
    div.previousElementSibling.textContent = 'Изменить фотографию';
};

export {addDot, loadingWithoutForm}