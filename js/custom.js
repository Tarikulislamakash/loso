/* Show and hide menu */

$(document).ready(function(){

	$(window).scroll(function(){

		if ( $(window).scrollTop() < 80 )
		{
			$('.navbar').css({

				'margin-top' : '-100px',
				'opacity'    : '0'

			});


			$('.navbar-default').css({

				'background-color' : 'rgba(59, 59, 59, 0)'

			});
		}
		else
		{
			$('.navbar').css({

				'margin-top' : '0px',
				'opacity'    : '1'
 
			});


			$('.navbar-default').css({

				'background-color' : 'rgba(59, 59, 59, 1)',
				'border-color'     : '#444'

			});
		}

	});

});



/* Smooth Scrolling */

$(document).ready(function(){
	

	$('.nav-item, #scroll-to-top').click(function(){

		if( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname )
		{
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			if ( target.length )
			{
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}

		}

	});


});



/* Active menu item on click */

$(document).ready(function(){


	$navbar = $('.navbar-nav li a');

	$navbar.click(function(){

		$navbar.parent().removeClass('active');

		$(this).parent().addClass('active');;

	});


});



/* highlight menu item on scroll */

$(document).ready(function(){


	$(window).scroll(function(){

		$('section').each(function(){

			var id      = $(this).attr('id');
			var height  = $(this).outerHeight();
			var grttop  = $(this).offset().top - 50;


			if ( $(window).scrollTop() > grttop && $(window).scrollTop() < grttop + height )
			{

				$('.navbar-nav li a[href="#' + id + '"]').parent().addClass('active');

			}
			else
			{

				$('.navbar-nav li a[href="#' + id + '"]').parent().removeClass('active');

			}

		});

	});


});


/* Bxslider */

$(document).ready(function(){

	$('.bxslider').bxSlider({

		slideWidth: 292.5,
		auto: true,
		minSlides: 1,
		maxSlides: 3,
		slideMargin: 50      

	});

});



/* Counter Up */

$(document).ready(function(){

	$('.counter-num').counterUp({

		delay: 10,
		time: 1500

	});

});



/* Active Wow */

$(document).ready(function(){

	new WOW().init();

});