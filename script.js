$(document).ready(function(){
    $('.drop').click(function(){
        $(this).find('img').toggleClass('rotate');
        $(this).find('.drop_item').slideToggle();
    });
    // console.log($('#title'));


    //block change in in form 
    $('#block').change(function() {
        var block = $('#block').val();
        // alert(block);
        if(block == "web-front-end"){
            $('#t_web_front').css('display','block');
            $('#t_web_back').css('display','none');
            $('#t_front_framework').css('display','none');
            $('#t_back_framework').css('display','none');
        }
        else if(block == "web-back-end"){
            $('#t_web_front').css('display','none');
            $('#t_web_back').css('display','block');
            $('#t_front_framework').css('display','none');
            $('#t_back_framework').css('display','none');
        }
        else if(block == "framework-front"){
            $('#t_web_front').css('display','none');
            $('#t_web_back').css('display','none');
            $('#t_front_framework').css('display','block');
            $('#t_back_framework').css('display','none');
        }
        else if(block == "framework-back"){
            $('#t_web_front').css('display','none');
            $('#t_web_back').css('display','none');
            $('#t_front_framework').css('display','none');
            $('#t_back_framework').css('display','block');
        }
    });



});