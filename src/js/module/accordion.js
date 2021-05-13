const accordion = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
        blocs = document.querySelectorAll(itemsSelector);

    btns.forEach(btn=>{
        btn.addEventListener('click',function () {

            // this.nextElementSibling.classList.toggle('active-content');
            if(!this.classList.contains('active-style')){
                // this.nextElementSibling.style.maxHeight = 'auto';
                btns.forEach(item =>{
                    item.classList.remove('active-style');
                    item.nextElementSibling.style.maxHeight = '0';
                    item.nextElementSibling.classList.remove('active-content');
                });
                this.classList.add('active-style');
                this.nextElementSibling.classList.add('active-content');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 +'px';
            } else{
                this.classList.remove('active-style');
                this.nextElementSibling.classList.remove('active-content');
                this.nextElementSibling.style.maxHeight = '0';
            }
        });
    });
/*    blocs.forEach(item =>{
        item.classList.add('animated','fadeInDown');
    });

    btns.forEach(btn =>{
        btn.addEventListener('click', function () {
            if(!this.classList.contains('active')){
                /!*                btns.forEach(item =>{
                                    item.classList.remove('active','active-style');
                                });*!/
                this.classList.toggle('active','active-style');
            }
        });
    });*/
};
export default accordion;