var shadow = document.querySelector('.shadow');
var hamburger = document.querySelector('.hamburger');
var dropDownNav = document.querySelector('.header-bottom-nav');

var shadowOn = () => shadow.classList.add('shadow-active');
    shadowOff = () => shadow.classList.remove('shadow-active');

var dropDownListOn = () => dropDownNav.classList.add('show');
    dropDownListOff = () => dropDownNav.classList.remove('show');

var modalLoginOff = () => document.querySelector('.login').parentNode.classList.remove('active');
    modalCabinetOff = () => document.querySelector('.cabinet').parentNode.classList.remove('active');


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
    } else {
        modalLoginOff();
        hamburger.classList.add('active')
        dropDownListOn();
        shadowOn();
    }
})

// var loginModal = () => {
if(document.querySelector('.login')){
    document.querySelector('.login').onclick = function () {
        modalCabinetOff();
        this.parentNode.classList.toggle('active');
    }
}
// }
if (document.querySelector('.cabinet')) {
    document.querySelector('.cabinet').onclick = function () {
        modalLoginOff();
        this.parentNode.classList.toggle('active')
    }
}
var closeAllCategory = () => {
    document.querySelectorAll('.list-category').forEach(item => {
        item.classList.remove('active')
    })
}

if(document.querySelector('.list-category-name')){
    document.querySelectorAll('.list-category-name').forEach(item => {
        item.addEventListener('click', function () {
            if (this.parentNode.classList.contains('active')){
                closeAllCategory();
                return
            } else{
                closeAllCategory();
                this.parentNode.classList.add('active');
            }
        })
    })
}





















// google maps
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

// function initialize() {

    var myOptions = {
        zoom: 12,
        // mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        center: new google.maps.LatLng(50.37623038542901,30.546154975891113)
    }

    var map = new google.maps.Map(document.querySelector('.map'), myOptions);

    bounds = new google.maps.LatLngBounds();

    markers = [];



    var markerLatLng2 = new google.maps.LatLng(53.89543, 27.50443);

    var marker2 = new google.maps.Marker({
        position: markerLatLng2,
        map: map,
        title: 'Бетонный',
        icon: '../img/map-marker.png'
    });

    var infoWindow2 = new google.maps.InfoWindow({
        content: '<p>\u0442\u0435\u043b.\u0444\u0430\u043a\u0441: +375 (17) 207-34-36<\/p>'
    });

    marker2.addListener('click', function() {
        infoWindow2.open(map, marker2);
    });

    bounds.extend(markerLatLng2);

    markers.push(marker2);




    var markerLatLng3 = new google.maps.LatLng(55.18189, 30.2488);

    var marker3 = new google.maps.Marker({
        position: markerLatLng3,
        map: map,
        title: 'Витебск',
        icon: '../img/map-marker.png'
    });

    var infoWindow3 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b. +375 (212) 48-86-94\r\n<\/p><br>\r\n<p>\u041c\u043e\u0431.\u0442\u0435\u043b:\r\n<\/p>\r\n<p>+375(29)599-65-15\r\n<\/p><br>\r\n<p>+375(29)734-00-75\r\n<\/p><br>\r\n<p>+375(29)512-00-91\r\n<\/p>"'
    });

    marker3.addListener('click', function() {
        infoWindow3.open(map, marker3);
    });

    bounds.extend(markerLatLng3);

    markers.push(marker3);




    var markerLatLng4 = new google.maps.LatLng(54.52677, 30.44116);

    var marker4 = new google.maps.Marker({
        position: markerLatLng4,
        map: map,
        title: 'Орша',
        icon: '../img/map-marker.png'
    });

    var infoWindow4 = new google.maps.InfoWindow({
        content: '<p>\u0442\u0435\u043b. <\/p><p>+375 (216) 52-90-42 <\/p><p>+375 (44) 734-00-74<\/p><p>+375 (44) 767-56-06<\/p>'
    });

    marker4.addListener('click', function() {
        infoWindow4.open(map, marker4);
    });

    bounds.extend(markerLatLng4);

    markers.push(marker4);




    var markerLatLng5 = new google.maps.LatLng(53.92003, 30.36218);

    var marker5 = new google.maps.Marker({
        position: markerLatLng5,
        map: map,
        title: 'Могилев',
        icon: '../img/map-marker.png'
    });

    var infoWindow5 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b. <\/p><p>+375 (44) 734-00-16         <\/p><p>+375 (44) 734-00-08        <\/p><p>+375(44)711-09-42<\/p>"'
    });

    marker5.addListener('click', function() {
        infoWindow5.open(map, marker5);
    });

    bounds.extend(markerLatLng5);

    markers.push(marker5);




    var markerLatLng6 = new google.maps.LatLng(52.11103, 23.75794);

    var marker6 = new google.maps.Marker({
        position: markerLatLng6,
        map: map,
        title: 'Брест',
        icon: '../img/map-marker.png'
    });

    var infoWindow6 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b.\u0444\u0430\u043a\u0441:<\/p><p> +375 (162) 40-59-59                         <\/p><p>+375 (44) 586-54-19                  <\/p><p>+375 (33) 343-42-84                   <\/p><p>+375(44)734-15-00<\/p>"'
    });

    marker6.addListener('click', function() {
        infoWindow6.open(map, marker6);
    });

    bounds.extend(markerLatLng6);

    markers.push(marker6);




    var markerLatLng7 = new google.maps.LatLng(53.84806, 27.68407);

    var marker7 = new google.maps.Marker({
        position: markerLatLng7,
        map: map,
        title: 'Промышленная',
        icon: '../img/map-marker.png'

    });

    var infoWindow7 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b.\u0444\u0430\u043a\u0441: +375 (17) 344-21-28<\/p>"'
    });

    marker7.addListener('click', function() {
        infoWindow7.open(map, marker7);
    });

    bounds.extend(markerLatLng7);

    markers.push(marker7);




    var markerLatLng8 = new google.maps.LatLng(53.69048, 23.86804);

    var marker8 = new google.maps.Marker({
        position: markerLatLng8,
        map: map,
        title: 'Гродно',
        icon: '../img/map-marker.png'
    });

    var infoWindow8 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b. <\/p><p>+375 (152) 71-09-99 <\/p><p>+375 (44) 734-00-15<\/p><p>+375 (29) 734-00-15<\/p><p>+375(29)580-47-77<\/p>"'
    });

    marker8.addListener('click', function() {
        infoWindow8.open(map, marker8);
    });

    bounds.extend(markerLatLng8);

    markers.push(marker8);




    var markerLatLng10 = new google.maps.LatLng(52.12791, 26.04273);

    var marker10 = new google.maps.Marker({
        position: markerLatLng10,
        map: map,
        title: 'Пинск',
        icon: '../img/map-marker.png'
    });

    var infoWindow10 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b. +375 (165) 31-13-68 <\/p><p>\u041c\u043e\u0431 \u0442\u0435\u043b:<\/p><p>+375(29)152-98-01                <\/p><p>+375(29)601-78-66                <\/p><p>+375(29)601-78-44<\/p>"'
    });

    marker10.addListener('click', function() {
        infoWindow10.open(map, marker10);
    });

    bounds.extend(markerLatLng10);

    markers.push(marker10);




    var markerLatLng11 = new google.maps.LatLng(53.15122, 29.18294);

    var marker11 = new google.maps.Marker({
        position: markerLatLng11,
        map: map,
        title: 'Бобруйск',
        icon: '../img/map-marker.png'
    });

    var infoWindow11 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b. <\/p><p>+375 (225) 72-80-87        <\/p><p>+375 (225) 72-83-00        <\/p><p>+375 (44) 554-43-11        <\/p><p>+375 (44) 554-43-10         <\/p><p>+375 (44) 553-38-83<\/p>"'
    });

    marker11.addListener('click', function() {
        infoWindow11.open(map, marker11);
    });

    bounds.extend(markerLatLng11);

    markers.push(marker11);




    var markerLatLng12 = new google.maps.LatLng(53.89693, 25.30154);

    var marker12 = new google.maps.Marker({
        position: markerLatLng12,
        map: map,
        title: 'Лида',
        icon: '../img/map-marker.png'
    });

    var infoWindow12 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b. <\/p><p>+375 (154) 60-45-56 <\/p><p>+375 (44) 554-43-12<\/p><p>+375 (44) 554-43-13<\/p>"'
    });

    marker12.addListener('click', function() {
        infoWindow12.open(map, marker12);
    });

    bounds.extend(markerLatLng12);

    markers.push(marker12);




    var markerLatLng13 = new google.maps.LatLng(55.4798, 28.82463);

    var marker13 = new google.maps.Marker({
        position: markerLatLng13,
        map: map,
        title: 'Полоцк',
        icon: '../img/map-marker.png'
    });

    var infoWindow13 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b. <\/p><p>+375 (214) 44-41-60 <\/p><p>+375 (44) 541-35-13<\/p><p>+375 (29) 794-16-76<\/p><p>+375(44)541-35-46<\/p>"'
    });

    marker13.addListener('click', function() {
        infoWindow13.open(map, marker13);
    });

    bounds.extend(markerLatLng13);

    markers.push(marker13);




    var markerLatLng14 = new google.maps.LatLng(52.46216, 30.94632);

    var marker14 = new google.maps.Marker({
        position: markerLatLng14,
        map: map,
        title: 'Гомель',
        icon: '../img/map-marker.png'
    });

    var infoWindow14 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b. <\/p><p>+375 (232) 63-99-46<\/p><p>+375 (44) 544-15-74<\/p><p>+375 (44) 544-15-84<\/p><p>+375 (44) 734-00-18<\/p>"'
    });

    marker14.addListener('click', function() {
        infoWindow14.open(map, marker14);
    });

    bounds.extend(markerLatLng14);

    markers.push(marker14);




    var markerLatLng16 = new google.maps.LatLng(53.13772, 25.98494);

    var marker16 = new google.maps.Marker({
        position: markerLatLng16,
        map: map,
        title: 'Барановичи',
        icon: '../img/map-marker.png'
    });

    var infoWindow16 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b.\u0444\u0430\u043a\u0441:<\/p><p>+375 (163) 49-66-29<br>\u041c\u043e\u0431.\u0442\u0435\u043b:<br>+375(44)732-95-58<br>+375(44)718-90-39<br>+375(44)732-94-36<\/p>"'
    });

    marker16.addListener('click', function() {
        infoWindow16.open(map, marker16);
    });

    bounds.extend(markerLatLng16);

    markers.push(marker16);




    var markerLatLng17 = new google.maps.LatLng(52.12657, 29.3333);

    var marker17 = new google.maps.Marker({
        position: markerLatLng17,
        map: map,
        title: 'Калинковичи',
        icon: '../img/map-marker.png'
    });

    var infoWindow17 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b. <\/p><p>+375 (2345) 5-09-32 <\/p><p>+375 (44) 732-96-83<\/p><p>+375 (44) 732-97-48<\/p>"'
    });

    marker17.addListener('click', function() {
        infoWindow17.open(map, marker17);
    });

    bounds.extend(markerLatLng17);

    markers.push(marker17);




    var markerLatLng19 = new google.maps.LatLng(53.65821, 23.80693);

    var marker19 = new google.maps.Marker({
        position: markerLatLng19,
        map: map,
        title: 'Гродно2',
        icon: '../img/map-marker.png'
    });

    var infoWindow19 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b. <\/p><p>+375 (152) 60-65-69 <\/p><p>+375 (29) 554-86-69<\/p><p>+375 (44) 554-84-40<\/p>"'
    });

    marker19.addListener('click', function() {
        infoWindow19.open(map, marker19);
    });

    bounds.extend(markerLatLng19);

    markers.push(marker19);




    var markerLatLng20 = new google.maps.LatLng(52.86974, 30.00865);

    var marker20 = new google.maps.Marker({
        position: markerLatLng20,
        map: map,
        title: 'Жлобин',
        icon: '../img/map-marker.png'
    });

    var infoWindow20 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b. <\/p><p>+375 (2334) 3-01-01<\/p><p>+375 (44) 755-66-36<\/p>"'
    });

    marker20.addListener('click', function() {
        infoWindow20.open(map, marker20);
    });

    bounds.extend(markerLatLng20);

    markers.push(marker20);




    var markerLatLng21 = new google.maps.LatLng(52.11173, 23.66467);

    var marker21 = new google.maps.Marker({
        position: markerLatLng21,
        map: map,
        title: 'Брест-2',
        icon: '../img/map-marker.png'
    });

    var infoWindow21 = new google.maps.InfoWindow({
        content: '"<p>+375 33 6962889                                       <\/p><p><span><\/span>+375 29 5304476                                                        <\/p><p>+375 29 1869674<\/p>"'
    });

    marker21.addListener('click', function() {
        infoWindow21.open(map, marker21);
    });

    bounds.extend(markerLatLng21);

    markers.push(marker21);




    var markerLatLng22 = new google.maps.LatLng(51.90532, 26.85401);

    var marker22 = new google.maps.Marker({
        position: markerLatLng22,
        map: map,
        title: 'Столин',
        icon: '../img/map-marker.png'
    });

    var infoWindow22 = new google.maps.InfoWindow({
        content: '"<p>\u041c\u043e\u0431.\u0442\u0435\u043b: <\/p><p>+375(29)101-53-23                 <br>+375(29)226-52-91                 <br>+375(29)186-96-05                 <br>+375(29)808-50-99<\/p>"'
    });

    marker22.addListener('click', function() {
        infoWindow22.open(map, marker22);
    });

    bounds.extend(markerLatLng22);

    markers.push(marker22);




    var markerLatLng23 = new google.maps.LatLng(52.05008, 29.25003);

    var marker23 = new google.maps.Marker({
        position: markerLatLng23,
        map: map,
        title: 'Мозырь',
        icon: '../img/map-marker.png'
    });

    var infoWindow23 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b <\/p><p>8-0236-206401<\/p><p>\u041c\u043e\u0431.\u0442\u0435\u043b: <\/p><p>+375(44)732-98-35<\/p>"'
    });

    marker23.addListener('click', function() {
        infoWindow23.open(map, marker23);
    });

    bounds.extend(markerLatLng23);

    markers.push(marker23);




    var markerLatLng24 = new google.maps.LatLng(52.25744, 26.81543);

    var marker24 = new google.maps.Marker({
        position: markerLatLng24,
        map: map,
        title: 'Лунинец',
        icon: '../img/map-marker.png'
    });

    var infoWindow24 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b. <\/p><p>80164758917<\/p><p>Mo\u0431.\u0442\u0435\u043b.<\/p><p>+375291869664                <\/p><p>+375445161134<\/p>"'
    });

    marker24.addListener('click', function() {
        infoWindow24.open(map, marker24);
    });

    bounds.extend(markerLatLng24);

    markers.push(marker24);




    var markerLatLng27 = new google.maps.LatLng(53.09382, 25.3392);

    var marker27 = new google.maps.Marker({
        position: markerLatLng27,
        map: map,
        title: 'Слоним',
        icon: '../img/map-marker.png'
    });

    var infoWindow27 = new google.maps.InfoWindow({
        content: '"<p>\u041c\u043e\u0431.\u0442\u0435\u043b: <\/p><p>+375(44)544-56-06<\/p><p>+375(44)784-94-92<\/p>"'
    });

    marker27.addListener('click', function() {
        infoWindow27.open(map, marker27);
    });

    bounds.extend(markerLatLng27);

    markers.push(marker27);




    var markerLatLng28 = new google.maps.LatLng(54.30083, 26.87442);

    var marker28 = new google.maps.Marker({
        position: markerLatLng28,
        map: map,
        title: 'Молодечно',
        icon: '../img/map-marker.png'
    });

    var infoWindow28 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b.\/\u0444\u0430\u043a\u0441 <\/p><p>+375176503414<\/p><p>\u041c\u043e\u0431.\u0442\u0435\u043b: <\/p><p>+375(29)685-08-75                 <\/p><p>+375(29)317-09-88<\/p>"'
    });

    marker28.addListener('click', function() {
        infoWindow28.open(map, marker28);
    });

    bounds.extend(markerLatLng28);

    markers.push(marker28);




    var markerLatLng29 = new google.maps.LatLng(53.808888765048, 27.58670470021);

    var marker29 = new google.maps.Marker({
        position: markerLatLng29,
        map: map,
        title: 'СТО',
        icon: '../img/map-marker.png'
    });

    var infoWindow29 = new google.maps.InfoWindow({
        content: '""'
    });

    marker29.addListener('click', function() {
        infoWindow29.open(map, marker29);
    });

    bounds.extend(markerLatLng29);

    markers.push(marker29);




    var markerLatLng32 = new google.maps.LatLng(52.4166, 30.92088);

    var marker32 = new google.maps.Marker({
        position: markerLatLng32,
        map: map,
        title: 'Гомель-2',
        icon: '../img/map-marker.png'
    });

    var infoWindow32 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b.\u0444\u0430\u043a\u0441: <\/p><p>+375 (232) 29-59-98<\/p><p>\u041c\u043e\u0431.\u0442\u0435\u043b: <\/p><p>+375(29)601-20-58                 <\/p><p>+375(29)601-13-84<\/p>"'
    });

    marker32.addListener('click', function() {
        infoWindow32.open(map, marker32);
    });

    bounds.extend(markerLatLng32);

    markers.push(marker32);




    var markerLatLng33 = new google.maps.LatLng(53.12686, 26.05249);

    var marker33 = new google.maps.Marker({
        position: markerLatLng33,
        map: map,
        title: 'Барановичи-2',
        icon: '../img/map-marker.png'
    });

    var infoWindow33 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b.\u0444\u0430\u043a\u0441: <\/p><p>+375 (163) 48-52-88<\/p><p>\u041c\u043e\u0431.\u0442\u0435\u043b: <\/p><p>+375(44)732-94-36                 <\/p><p>+375(44)732-94-36<\/p>"'
    });

    marker33.addListener('click', function() {
        infoWindow33.open(map, marker33);
    });

    bounds.extend(markerLatLng33);

    markers.push(marker33);




    var markerLatLng36 = new google.maps.LatLng(53.94134, 25.75557);

    var marker36 = new google.maps.Marker({
        position: markerLatLng36,
        map: map,
        title: 'Ивье',
        icon: '../img/map-marker.png'
    });

    var infoWindow36 = new google.maps.InfoWindow({
        content: '"<p>\u041c\u043e\u0431.\u0442\u0435\u043b: <\/p><p>80(29) 3377699<\/p><p>80( 29) 3377554<\/p>"'
    });

    marker36.addListener('click', function() {
        infoWindow36.open(map, marker36);
    });

    bounds.extend(markerLatLng36);

    markers.push(marker36);




    var markerLatLng37 = new google.maps.LatLng(53.16791, 24.42938);

    var marker37 = new google.maps.Marker({
        position: markerLatLng37,
        map: map,
        title: 'Волковыск',
        icon: '../img/map-marker.png'
    });

    var infoWindow37 = new google.maps.InfoWindow({
        content: '"<p>\u0442\u0435\u043b: <\/p><p>+375(29)126-09-99<\/p><p>+375(33)310-99-99<\/p>"'
    });

    marker37.addListener('click', function() {
        infoWindow37.open(map, marker37);
    });

    bounds.extend(markerLatLng37);

    markers.push(marker37);


    map.fitBounds(bounds);
    map.panToBounds(bounds);

// }
// initialize();