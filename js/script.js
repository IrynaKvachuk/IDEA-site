
var goods;

$.get('data/goods.json', function (data) {
    goods = data;
});


//mouse-cursor 
let mouseCursor = document.querySelector(".cursor");
let navLinks = [
    document.querySelectorAll('.nav-items li'),
    document.querySelectorAll('.gallery-nav button')
];
let socialLinks = document.querySelectorAll('.social a');

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(arr => {
    arr.forEach(function(link) {
        link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove("link-grow");
            link.classList.remove("hovered-link");
        });
        link.addEventListener('mouseover', () => {
            mouseCursor.classList.add("link-grow");
            link.classList.add("hovered-link");
        });
    })
});


$(document).ready(function () {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })
})

//owl-carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
});



//gallery 
$('[data-fancybox="decor"]').fancybox({
    protect: true,
    loop: true,
    buttons: [
        "zoom",
        "share",
        "thumbs",
        "close"
    ],
    animationEffect: "zoom-in-out",
    transitionEffect: "slide",
    clickContent: function (current, event) {
        return current.type === "image" ? "zoom" : false;
    }
});

//gallery-content-changing
function putGalleryContent() {

}

//click to scroll top 
$('.move-up span').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 1000);
})

// navSlide();

