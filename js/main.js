$(document).ready(function () {
    
    var $this;
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 104){
            $('#shapka').addClass("sticky");
            $('#shfoo').css("padding-top", "54px");
        }
        else{
            $('#shapka').removeClass("sticky");
            $('#shfoo').css("padding-top", "0px");
        }
        if ($(this).scrollTop() >= 909 && $(this).scrollTop() <= 1500) {
            $('*[data-menu="argum"]').css("border-bottom", "1px solid #ffffff");
        }else {$('*[data-menu="argum"]').css("border-bottom", "none")}
        
        if ($(this).scrollTop() >= 2799 && $(this).scrollTop() <= 3600) {
            $('*[data-menu="cases"]').css("border-bottom", "1px solid #ffffff");
        }else {$('*[data-menu="cases"]').css("border-bottom", "none")}
        
        if ($(this).scrollTop() >= 3899 && $(this).scrollTop() <= 4650) {
            $('*[data-menu="klient"]').css("border-bottom", "1px solid #ffffff");
        }else {$('*[data-menu="klient"]').css("border-bottom", "none")}
        
        if ($(this).scrollTop() >= 4799 && $(this).scrollTop() <= 5700) {
            $('*[data-menu="product"]').css("border-bottom", "1px solid #ffffff");
        }else {$('*[data-menu="product"]').css("border-bottom", "none")}
        
        if ($(this).scrollTop() >= 8229 && $(this).scrollTop() <= 8950) {
            $('*[data-menu="contact"]').css("border-bottom", "1px solid #ffffff");
        }else {$('*[data-menu="contact"]').css("border-bottom", "none")}
    });
    
    $('.go_to').click( function() {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800);
        }
        return false;
    });
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        startPosition: 'URLHash',
        onDragged: callback,
    
    });
    $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
    
    $this = $('.owl-carousel').find('.active').find('.item').data('hash');
    $('a[href$="#'+$this+'"]').css("border-bottom", "1px solid #ffffff");
    
    $('.owl-next').on('click', callback);
    $('.owl-prev').on('click', callback);
    $('.links').on('click', 'a', function() {setTimeout(callback, 200)});
    
    
    function callback() {
        $('a[href$="#'+$this+'"]').css("border-bottom", "none");
        $this = $('.owl-carousel').find('.active').find('.item').data('hash');
        $('a[href$="#'+$this+'"]').css("border-bottom", "1px solid #ffffff");
    }
});