;(function(){

	// Menu settings
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});

	$("#theFooter").hide();

	$("#footer-button").click(function(){
	  $("#theFooter").slideToggle();
	  return false;
	});		

})(jQuery)