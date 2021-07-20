// Active nav links
$('a[href$="/' + location.pathname.split("/")[1] + '"]').addClass('nav-active');

// Add background to nav on scroll
$(window).scroll(function(event){
     var scroll = $(this).scrollTop();
     if (scroll > 0){
         $('.notion-navbar').addClass('nav-scrolled');
         $('.notion-quote').addClass('quote-scrolled');
     } else {
         $('.notion-navbar').removeClass('nav-scrolled');
         $('.notion-quote').removeClass('quote-scrolled');
     }
});

// Mobile nav menu
$('.notion-quote .notion-semantic-string .bg-yellow').click(function(){
    console.log('clicked');
    $('.notion-quote .notion-semantic-string').toggleClass('menu-show');
});
