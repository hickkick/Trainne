$(document).ready(function(){      // amazing jQuery ("rip")

    

    $('.block__title').click(function(){
        if ($('.block').hasClass('one')){     //doing some accordion )
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
        }

        $(this).toggleClass('active').next().slideToggle(300);
        if ($('.block__title').hasClass('active')){    // Ist for styiling item
            $('.block__title.active').parent().addClass('style'); 
        }
        else {
            $('.block__title').parent().removeClass('style');
        }
    });
  
    $('.header__burger').click(function(event){   //  its Burger King
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    var header = $('.header'),                // this is a real magic (for disepier menu)
	scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
    
        if ( scrolled > 10 && scrolled > scrollPrev ) {
            header.addClass('out');
        } else {
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    });


});