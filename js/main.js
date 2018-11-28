$(document).ready(function () {
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 104){
            $('#shapka').addClass("sticky");
            $('#shfoo').css("padding-top", "54px");
        }
        else{
            $('#shapka').removeClass("sticky");
            $('#shfoo').css("padding-top", "0px");
        }
    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        items:1,
        startPosition: 'URLHash'
    });
    $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
    
    
});