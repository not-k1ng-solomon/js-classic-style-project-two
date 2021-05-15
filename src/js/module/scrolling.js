const scrolling = (upSelector) => {
    const upElev = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1500) {
            upElev.classList.add('animated', 'fadeIn');
            upElev.classList.remove('fadeOut');
        } else {
            upElev.classList.add('fadeOut');
            upElev.classList.remove('fadeIn');
        }
    });
    //Scrolling with raf

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.2;

    links.forEach(link => {
        console.log(3);
        link.addEventListener('click', function (event) {
            event.preventDefault();
            console.log(1);
            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) :
                        Math.max(widthTop + progress/speed, widthTop - toBlock));
                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });

    //Pure js scrolling
    /*const element = document.documentElement,
        body = document.body;

    const calcScroll = () => {
        upElev.addEventListener('click', function (event) {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);
            console.log('click');
            if (this.hash !== '') {
                event.preventDefault();
                let hashElement = document.querySelector(this.hash),
                    hashElementTop = 0;
                while (hashElement.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }

                hashElementTop = Math.round(hashElementTop);
                smoothScroll(scrollTop, hashElementTop, this.hash);
            }
        });
    };

    function smoothScroll(from, to, hash) {
        let timeInterval = 1,
            prevScrollTop,
            speed;
        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }
        let move = setInterval(function () {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);
            if (prevScrollTop === scrollTop ||
                (to > from && scrollTop >= to) ||
                (to < from && scrollTop <= to)
            ) {
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScrollTop = scrollTop;
            }
        }, timeInterval);
    }
    calcScroll();*/
};

export default scrolling;