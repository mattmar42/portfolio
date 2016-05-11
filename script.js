$(document).ready(function(){

	$('h1').fadeIn(1000);
	$('p').fadeIn(2200);
	$('li').fadeIn(2200);

	$('a[href^="#"]').on('click', function(event){

    var target = $($(this).attr('href'));

    if (target.length){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 75
        }, 1000);
    }

});
	
});