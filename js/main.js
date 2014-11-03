/*Fit Text*/
$(".words").fitText(1.2, { minFontSize: '20px', maxFontSize: '50px' });


$('a').smoothScroll();


$(function() {
	$('.text-lrg').click(function() {
		$('.expand > div').toggle(100)
	});
});
