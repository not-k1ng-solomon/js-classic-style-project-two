import {getResource} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
    const wrapperCards = document.querySelector(wrapper),
        btn = document.querySelector(trigger);

    /*    cards.forEach(item =>{
            item.classList.add('animated','fadeInUp');

        });
        btn.addEventListener('click',()=>{
            cards.forEach(item =>{
                item.classList.remove('hidden-lg','hidden-md','hidden-sm','hidden-xs');
                item.classList.add('col-sm-3','col-sm-offset-0','col-xs-10','col-xs-offset-1');
            });
            btn.remove();
        });*/

    btn.addEventListener('click', function () {
        getResource('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(error => console.log(error));
        this.remove();
    });

    function createCards(responce) {
        responce.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'styles-2');

            let divCard = document.createElement("div");
            divCard.classList.add('styles-block');

            let cardImg = document.createElement("img");
            cardImg.setAttribute('src', src);

            let cardTitle = document.createElement("h4");
            cardTitle.textContent = title;

            let cardLink = document.createElement("a");
            cardLink.setAttribute('href', link);
            cardLink.textContent = 'Подробнее';

            divCard.appendChild(cardImg);
            divCard.appendChild(cardTitle);
            divCard.appendChild(cardLink);

            card.appendChild(divCard);
            /*            card.innerHTML = `
                            <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
                                 <div class=styles-block>
                                     <img src=${item.src} alt>
                                     <h4>${item.title}</h4>
                                     <a href="${item.link}">Подробнее</a>
                                 </div>
                             </div>`;*/
            wrapperCards.appendChild(card);
        });
    }
};


export default showMoreStyles;