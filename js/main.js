/*Fit Text*/
$(".words").fitText(1.2, { minFontSize: '20px', maxFontSize: '50px' });


$('a').smoothScroll();

document.querySelector( ".toggle-icon" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
});