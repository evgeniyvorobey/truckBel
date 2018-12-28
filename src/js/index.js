var shadow = document.querySelector('.shadow');
var hamburger = document.querySelector('.hamburger');
var dropDownNav = document.querySelector('.header-bottom-nav');

var shadowOn = () => shadow.classList.add('shadow-active');
shadowOff = () => shadow.classList.remove('shadow-active');

var dropDownListOn = () => dropDownNav.classList.add('show');
dropDownListOff = () => dropDownNav.classList.remove('show');

var modalLoginOff = () => document.querySelector('.login').parentNode.classList.remove('active');
    modalCabinetOff = () => document.querySelector('.cabinet').parentNode.classList.remove('active');
    modalClientOff = () => document.querySelector('.client').parentNode.classList.remove('active');


shadow.addEventListener('click', () => {
    shadowOff();
    dropDownListOff();
    hamburger.classList.remove('active');
    if (document.querySelector('aside')) {
        asideOff();
    }
})


hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('active')) {
        shadowOff();
        dropDownListOff();
        hamburger.classList.remove('active')
    } else {
        if (document.querySelector('aside')) {
            asideOff();
        }
        modalLoginOff();
        hamburger.classList.add('active')
        dropDownListOn();
        shadowOn();
    }
})

// var loginModal = () => {
if (document.querySelector('.login')) {
    document.querySelector('.login').onclick = function () {
        modalCabinetOff();
        modalClientOff()
        this.parentNode.classList.toggle('active');
    }
}
// }

if (document.querySelector('.client')) {
    document.querySelector('.client').onclick = function (e){
        e.preventDefault();
        modalLoginOff();
        modalCabinetOff();

        this.parentNode.classList.toggle('active')
    }
}
if (document.querySelector('.cabinet')) {
    document.querySelector('.cabinet').onclick = function () {
        modalLoginOff();
        modalClientOff();
        this.parentNode.classList.toggle('active')
    }
}
var closeAllCategory = () => {
    document.querySelectorAll('.list-category').forEach(item => {
        item.classList.remove('active')
    })
}

var asideOn = () => document.querySelector('aside').classList.add('aside-active');
var asideOff = () => document.querySelector('aside').classList.remove('aside-active');

if (document.querySelector('.button-show-category')) {
    document.querySelector('.button-show-category button').onclick = function () {
        modalLoginOff();
        shadowOn();
        asideOn();

    }
}

if (document.querySelector('.list-category-name')) {
    document.querySelectorAll('.list-category-name').forEach(item => {
        item.addEventListener('click', function () {
            if (this.parentNode.classList.contains('active')) {
                closeAllCategory();
                return
            } else {
                closeAllCategory();
                this.parentNode.classList.add('active');
            }
        })
    })
}

window.onscroll = function () {
    modalLoginOff();
            modalCabinetOff();
            modalClientOff();
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (window.innerWidth >= 768) {
        var heightContent = document.querySelector('.header-bottom-block').offsetHeight;
        if (scrolled >= 120) {
            document.querySelector('.header-bottom-block').classList.add('scroll');
            document.querySelector('main').style = `padding-top:${heightContent}px`;
            document.querySelector('.search-input').setAttribute('placeholder', 'Введите серийный номер или VIN')
        } else {
            document.querySelector('.header-bottom-block').classList.remove('scroll');
            document.querySelector('.search-input').setAttribute('placeholder', 'Поиск')
            document.querySelectorAll('.header-bottom-item')[document.querySelectorAll('.header-bottom-item').length - 1].style.display = 'inherit';
            document.querySelector('main').style = 'padding-top: 0;';

        }
    }
}

window.onResize = function (e) {
    console.log(window.pageXOffset)
}


if (document.querySelector('.content-view')) {
    document.querySelectorAll('.content-view').forEach(item => {
        item.addEventListener('click', function () {
            document.querySelectorAll('.content-view').forEach(item => {
                item.classList.remove('current-view')
            })
            this.classList.add('current-view');
            document.querySelector('.container-list-all-item').classList.remove('calalogListSprite', 'catalogListImgSprite', 'catalogImgSprite');
            document.querySelector('.container-list-all-item').classList.add(this.getAttribute('view'))
        })
    })
}

$('.top-sider').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 40,
    autoplayHoverPause: true,
    nav: true,
    navText: '',
    navClass: ['left-button', 'right-button'],
    responsive: {
        0: {
            items: 1
        }
    }
})
$('.company-item-slider').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 0,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    navText: '',
    navClass: ['left-button', 'right-button'],
    responsive: {
        0: {
            items: 2
        },
        500: {
            items: 3
        },
        768: {
            items: 4
        },
        1024: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
})

