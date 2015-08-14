$(function () {
    var goTop = {
        init: function () {
            this.eventHandler();
        }
    }
    $.extend(goTop, {
        eventHandler: function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= 100) {
                    $('#TB_goTop').fadeIn(300);
                }else{    
                    jQuery('#TB_goTop').fadeOut(300);    
                }  
            });
            $('#TB_goTop,.TB_goTop').click(function () {
                $('html,body').animate({
                    scrollTop: '0px'
                }, 800);
            });
        }
    });
    goTop.init();
});