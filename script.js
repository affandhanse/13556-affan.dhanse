const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});






var menu = document.getElementById("btn")
var full = document.getElementById("full-scr")
var navimg = document.querySelector("nav img")
var i = 0;
menu.addEventListener("click", function() {
    if(i == 0) {
        full.style.top = 0;
    navimg.style.opacity = 0;
    i =1;
    }else{
        full.style.top = "-100%";
        navimg.style.opacity = 1;
        i = 0;
    }
})
