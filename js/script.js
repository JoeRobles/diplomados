$(document).ready(function(){
 
//===== Apps slider script =====

    var angle = 0;

    $('.slider .slide:odd').css({
        "-webkit-transform": "rotateY(180deg)",
        "-moz-transform": "rotateY(180deg)",
        "-o-transform": "rotateY(180deg)",
        "-ms-transform": "rotateY(180deg)",
        "transform": "rotateY(180deg)"

       /* "-moz-transform": "scaleX(-1)",
        "-o-transform": "scaleX(-1)",
        "-webkit-transform": "scaleX(-1)",
        "-ms-transform": "scaleX(-1)",
        "transform": "scaleX(-1)"*/

    });

    function sliderResize(){
        if ($(window).width() <= 550) {
            $('.appsblock .apps .slider').css("min-height", $(window).width() + 100);
        }
    }

    $('.slider .navigation-right').click(function(){
        if ($(this).parent().find('.active').is(':last-child') == false) {
            angle = angle - 180;
            var angledeg = 'rotateY(' + angle + 'deg)';

            $(this).parent().find('.rotator').css({
                "-webkit-transform": angledeg,
                "-moz-transform": angledeg,
                "-o-transform": angledeg,
                "-ms-transform": angledeg,
                "transform": angledeg
            });
            $(this).parent().find('.active').next().toggleClass('active');
            $(this).parent().find('.active:first').toggleClass('active');

        }
    });

    $('.slider .navigation-left').click(function(){

        if ($(this).parent().find('.active').is(':first-child') == false) {
            angle = angle + 180;
            var angledeg = 'rotateY(' + angle + 'deg)';

            $(this).parent().find('.rotator').css({
                "-webkit-transform": angledeg,
                "-moz-transform": angledeg,
                "-o-transform": angledeg,
                "-ms-transform": angledeg,
                "transform": angledeg
            });
            $(this).parent().find('.active').prev().toggleClass('active');
            $(this).parent().find('.active:last').toggleClass('active');
        }

    });



//===== "Send mail" button =====
    $('.mailbutton').click(function(){
        $('.contactsblock .input-container').toggleClass('active');
    });


    
    $(document).ready(function(){

    hDelay = 2000;
//===== jQueryLoader2 settings =====

        var ua = navigator.userAgent.toLowerCase();
        if ((ua.indexOf("msie") != -1) || (ua.indexOf("opera") != -1)){hDelay = 0}
        else{
            $("body").queryLoader2({
                barColor: "#fff",
                backgroundColor: "#00a99d",
                percentage: true,
                barHeight: 1,
                completeAnimation: "grow",
                minimumTime: 1000
            });
        }

//====== Twitter messages rotator ======
        setInterval(function(){
            $('.twitterblock .messages-container').find('.active').addClass('post-active');
            $('.twitterblock .messages-container').find('.active').removeClass('active');
            $('.twitterblock .messages-container').find('.post-active').next().addClass('active');

            if($('.twitterblock .message:last').is('.post-active')){
                $('.twitterblock .message:first').addClass('active');
            };

            $('.twitterblock .messages-container').find('.post-active').removeClass('post-active');

        }, 5000);
     
        sliderResize();
        $('#picture-home').delay(hDelay).queue(function(){
            $(this).addClass('active');
           // $("#qLoverlay").hide();
        });
        $('#description-home').delay(hDelay - 500).queue(function(){$(this).addClass('active')});
    });

    

//====== Other ======      


    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500, "swing");
        return false;
    });

    $(window).resize(function(){
        sliderResize();
    });

});