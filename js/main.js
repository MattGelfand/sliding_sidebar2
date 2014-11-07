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

$(function() {      
        $(".accordion section").css("opacity","1.0");     
        $(".accordion section").hover(function () {     
            $(this).siblings().stop().animate({opacity: 0.1}, "slow");   
        },          
        function () {      
                $(".accordion section").stop().animate({opacity: 1.0}, "slow");       
        });   
});

