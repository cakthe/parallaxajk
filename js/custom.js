$(document).ready(function() {

    /*Fungsi untuk membuat bar berhenti di bagian atas ketika masuk koordinat tertentu*/
    $.fn.fixedOn = function (pos) {
        var $this = this,
            $window = $(window);

        $window.scroll(function (e) {
            if ($window.scrollTop() < pos) {
            } else {
            }
            
            if($window.scrollTop() >= 700) {
                $('#gohome span').fadeOut('fast');
                $('#gohome').stop().animate({width: 70}, 100);
                $('#gohome').addClass('bg');
            }
            else {
                $('#gohome').removeClass('bg');
                $('#gohome').stop().animate({width: 100}, 100);
                $('#gohome span').fadeIn('fast');
            }

            if($window.scrollTop() < 650) {
                $('.bar').css('border-bottom-color', '#05696D');
            }
            else if($window.scrollTop() >= 650 && $window.scrollTop() < 1350) {
                $('.bar').css('border-bottom-color', '#757475');
            }
            else if($window.scrollTop() >= 1350 && $window.scrollTop() < 2050) {
                $('.bar').css('border-bottom-color', '#BF592E');   
            }
            else if($window.scrollTop() >= 2050 && $window.scrollTop() < 2750) {
                $('.bar').css('border-bottom-color', '#0C1126');   
            }
            else {
                $('.bar').css('border-bottom-color', '#004B7D');   
            }
        });
    };
    $('html').fixedOn(0);
    
    $('.icon').addClass('iconOff');
    $('.balance').css('display', 'none');

    $('.rsc').click(function() {
        $(this).find('.balance').toggle('slow', function() {
            $(this).parent().find('.icon').toggleClass('iconOff', 'fast');
        });
    });
});