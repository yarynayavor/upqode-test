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
