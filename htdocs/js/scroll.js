$(function(){
$('a').on('click', function(e){
e.preventDefault();
$('html, body').animate({
  opacity: 0
}, 400, function() {
  $('html, body').animate({
    opacity: 1,
  }, 400);
});
});
});
