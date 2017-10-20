$('ul.nav li a').hover(hoverIn,hoverOut);
function hoverIn() {
  $(this).find('i').stop(true, true).removeClass('fa-angle-right');
  $(this).find('i').stop(true, true).addClass('fa-angle-double-right');
}
function hoverOut() {
 $(this).find('i').stop(true, true).removeClass('fa-angle-double-right');
  $(this).find('i').stop(true, true).addClass('fa-angle-right');
}

$('ul.nav li.first-1').hover(function() {
  $(this).find('.dropdown-menu.multi-level').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu.multi-level').stop(true, true).delay(200).fadeOut(500);
});

$('ul.nav li.first-2').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


// different autoplay to sliders
$(document).ready(function () {
	var t;
	var start = $('#myCarousel').find('.active').attr('data-interval');
	t = setTimeout("$('#myCarousel').carousel({interval: 1000});", start-1000);

	//console.log(start);
	//console.log(t);

	$('#myCarousel').on('slid.bs.carousel', function () {   
	clearTimeout(t);  
	var duration = $(this).find('.item.active').attr('data-interval');
	console.log(duration);

	$('#myCarousel').carousel('pause');
	t = setTimeout("$('#myCarousel').carousel();", duration-1000);
	//console.log(t);
	});

});