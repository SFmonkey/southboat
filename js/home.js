$('.fadeInUp').each(function(){
        if(getElementViewTop($(this))){
            $(this).addClass( 'animated' );
            $(this).css({'visibility': 'visible', 'animation-name': 'fadeInUp'});
        }
    }
);

function getViewportHeight(){
    if (document.compatMode == "BackCompat"){
        return document.body.clientHeight;
    } else {
        return document.documentElement.clientHeight;
    }
}
function getElementViewTop(element){
    var elementScrollTop = $(window).scrollTop();
    var actualTop = element.offset().top;

    if(actualTop-elementScrollTop <= getViewportHeight() && actualTop-elementScrollTop > 0){
        return true;
    }
    return false;
}

function checkAnimations(){
    $('.fadeInUp').each(function(){
            if(getElementViewTop($(this))){
                $(this).addClass( 'animated' );
                $(this).css({'visibility': 'visible', 'animation-name': 'fadeInUp'});
            }
        }
    )
}

$(window).scroll(checkAnimations);
