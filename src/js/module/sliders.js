const sliders = (sliders, dir = false, prew, next) => {
    let slideIndex = 1,
        paused = false;
    const items = document.querySelectorAll(sliders),
        parent = items[0].parentNode;


    function showSliders(n) {
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    }

    showSliders(1);

    function plusSlides(n) {
        showSliders(slideIndex += n);
    }

    try {
        const prewBtn = document.querySelector(prew),
            nextBtn = document.querySelector(next);

        prewBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
            parent.removeEventListener('mouseleave', activetedAnimation);
        });
        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
            parent.removeEventListener('mouseleave', activetedAnimation);
        });
    } catch (e) {

    }

    function activetedAnimation() {
        if (dir == 'vertical') {
            paused = setInterval(() => {
                plusSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(() => {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');
            }, 3000);
        }
    }

    activetedAnimation();

    parent.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    parent.addEventListener('mouseleave', activetedAnimation, {once: true});

};

export default sliders;