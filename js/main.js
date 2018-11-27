$(document).ready(function () {
    
//    $(window).scroll(function() {
//        if ($(this).scrollTop() > 1){
//            $('h1').addClass("sticky");
//        }
//        else{
//            $('h1').removeClass("sticky");
//        }
//    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        items:1
    });
    $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
    
    
});