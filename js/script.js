$(function(){
	$('.carousel').carousel({
		interval: false
	});
	$('.search').on('click', function(){
		$('.main-menu .navbar-form').slideToggle();
	});
	$('#elastislide').elastislide();
});

$(window).load(function(){
	var carouselCaptionWidth = $('#carousel-sidebar .active img').width();
	$('#carousel-sidebar img').each(function(){
		$(this).attr('width', carouselCaptionWidth);
	});
	$('#carousel-sidebar .sidebar-carousel-caption').css('max-width', carouselCaptionWidth+'px');
	$('#carousel-sidebar .carousel-indicators').css('max-width', carouselCaptionWidth+'px');
	$('.side-bar .banner').css('max-width', carouselCaptionWidth+'px');
	//favourites on mouseover
	$('.product').mouseenter(function(){
		$('.product-favourites span', this).css('display', 'block');
	});
	$('.product').mouseleave(function(){
		$('.product-favourites span', this).css('display', 'none');
	});
});
