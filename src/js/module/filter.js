const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');


    const initializationFilter = (selection) => {
        let btnFilter = menu.querySelector(selection),
            markFilter = wrapper.querySelectorAll(selection);

        if (markFilter.length == 0) {
            markFilter = false;
        }

        btnFilter.addEventListener('click', () => {
            typeFilter(markFilter);
        });

    };

    const typeFilter = (markType) => {
        markAll.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(item => {
                item.style.display = 'block';
                item.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    menu.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.tagName == 'LI') {
            items.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
        }
    });

    initializationFilter('.all');
    initializationFilter('.lovers');
    initializationFilter('.chef');
    initializationFilter('.girl');
    initializationFilter('.guy');
    initializationFilter('.grandmother');
    initializationFilter('.granddad');
};
export default filter;