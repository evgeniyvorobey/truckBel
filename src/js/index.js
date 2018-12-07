var shadow = document.querySelector('.shadow');
var hamburger = document.querySelector('.hamburger');
var dropDownNav = document.querySelector('.header-bottom-nav');

var shadowOn = () => shadow.classList.add('shadow-active');
var shadowOff = () => shadow.classList.remove('shadow-active');

var dropDownListOn = () => dropDownNav.classList.add('show');
var dropDownListOff = () => dropDownNav.classList.remove('show');


shadow.addEventListener('click', () => {
    shadowOff();
    dropDownListOff();
    hamburger.classList.remove('active')
})


hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('active')){
    shadowOff();
    dropDownListOff();
    hamburger.classList.remove('active')
    } else {hamburger.classList.add('active')
    dropDownListOn();
    shadowOn();
    }
})

$('.top-sider').owlCarousel({
    autoplay: true,
    loop:true,
    margin:40,
    autoplayHoverPause: true,
    nav:true,
    navText: '',
    navClass: ['left-button','right-button'],
    responsive:{
        0:{
            items:1
        }
    }
})
$('.company-item-slider').owlCarousel({
    autoplay: true,
    loop:true,
    margin:40,
    autoplayHoverPause: true,
    nav:false,
    dots: false,
    navText: '',
    navClass: ['left-button','right-button'],
    responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
        768:{
            items:4
        },
        1024:{
            items:5
        },
        1200:{
            items:6
        }
    }
})