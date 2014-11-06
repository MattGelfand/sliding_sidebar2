/*Fit Text*/
$(".words").fitText(1.2, { minFontSize: '20px', maxFontSize: '50px' });


$('a').smoothScroll();


/*$('.extended').addClass('hide');

$(function() {
	$('.expand').on("click", "a", function(event) {
		event.preventDefault();
		$(this).parent().siblings('.extended').toggleClass("hide");
	});
});
*/

$(document).ready( function(){
        $(".btn").click(function () {
            $(".extra").show("slow");
        });
    });