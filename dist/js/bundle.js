!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){o(1),e.exports=o(2)},function(e,t){var o=document.querySelector(".shadow"),n=document.querySelector(".hamburger"),r=document.querySelector(".header-bottom-nav"),c=function(){return o.classList.add("shadow-active")};shadowOff=function(){return o.classList.remove("shadow-active")};dropDownListOff=function(){return r.classList.remove("show")};var i=function(){return document.querySelector(".login").parentNode.classList.remove("active")};modalCabinetOff=function(){return document.querySelector(".cabinet").parentNode.classList.remove("active")},modalClientOff=function(){return document.querySelector(".client").parentNode.classList.remove("active")},o.addEventListener("click",function(){shadowOff(),dropDownListOff(),n.classList.remove("active"),document.querySelector("aside")&&l()}),n.addEventListener("click",function(){n.classList.contains("active")?(shadowOff(),dropDownListOff(),n.classList.remove("active")):(document.querySelector("aside")&&l(),i(),n.classList.add("active"),r.classList.add("show"),c())}),document.querySelector(".login")&&(document.querySelector(".login").onclick=function(){modalCabinetOff(),modalClientOff(),this.parentNode.classList.toggle("active")}),document.querySelector(".client")&&(document.querySelector(".client").onclick=function(e){e.preventDefault(),i(),modalCabinetOff(),this.parentNode.classList.toggle("active")}),document.querySelector(".cabinet")&&(document.querySelector(".cabinet").onclick=function(){i(),modalClientOff(),this.parentNode.classList.toggle("active")});var a=function(){document.querySelectorAll(".list-category").forEach(function(e){e.classList.remove("active")})},l=function(){return document.querySelector("aside").classList.remove("aside-active")};document.querySelector(".button-show-category")&&(document.querySelector(".button-show-category button").onclick=function(){i(),c(),document.querySelector("aside").classList.add("aside-active")}),document.querySelector(".list-category-name")&&document.querySelectorAll(".list-category-name").forEach(function(e){e.addEventListener("click",function(){this.parentNode.classList.contains("active")?a():(a(),this.parentNode.classList.add("active"))})}),window.onscroll=function(){var e=window.pageYOffset||document.documentElement.scrollTop;if(window.innerWidth>=768){var t=document.querySelector(".header-bottom-block").offsetHeight;e>=120?(document.querySelector(".header-bottom-block").classList.add("scroll"),document.querySelector("main").style="padding-top:".concat(t,"px"),document.querySelector(".search-input").setAttribute("placeholder","Введите серийный номер или VIN")):(document.querySelector(".header-bottom-block").classList.remove("scroll"),document.querySelector(".search-input").setAttribute("placeholder","Поиск"),document.querySelectorAll(".header-bottom-item")[document.querySelectorAll(".header-bottom-item").length-1].style.display="inherit",document.querySelector("main").style="padding-top: 0;")}},window.onResize=function(e){console.log(window.pageXOffset)},document.querySelector(".content-view")&&document.querySelectorAll(".content-view").forEach(function(e){e.addEventListener("click",function(){document.querySelectorAll(".content-view").forEach(function(e){e.classList.remove("current-view")}),this.classList.add("current-view"),document.querySelector(".container-list-all-item").classList.remove("calalogListSprite","catalogListImgSprite","catalogImgSprite"),document.querySelector(".container-list-all-item").classList.add(this.getAttribute("view"))})}),$(".top-sider").owlCarousel({autoplay:!0,loop:!0,margin:40,autoplayHoverPause:!0,nav:!0,navText:"",navClass:["left-button","right-button"],responsive:{0:{items:1}}}),$(".company-item-slider").owlCarousel({autoplay:!0,loop:!0,margin:0,autoplayHoverPause:!0,nav:!1,dots:!1,navText:"",navClass:["left-button","right-button"],responsive:{0:{items:2},500:{items:3},768:{items:4},1024:{items:5},1200:{items:6}}})},function(e,t,o){}]);
//# sourceMappingURL=bundle.js.map