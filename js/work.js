/*
	This file is for works
*/
var projectTotal = 8;
$(document).ready(function(){


	$(".work-nav").css("width","100%");

	setNavButtonHref();

	if ($("iframe").length > 0) {
		$( 'body' ).responsiveVideo();
	}
	var options;
	if ($('.fix-height').length>0) {
		var options = {
			navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  	}
	} else {
		var options = {
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoHeight : true,
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  	}
	}


	//carousel
	$(".owl-carousel").owlCarousel(options);


});


function setNavButtonHref(){

	var pathName = window.location.pathname;
	var targetName = pathName.split("/");
	targetName = targetName[targetName.length-1];
	
	var patt = new RegExp(/project-(\d)\.html/);

	var currentPage = parseInt(targetName.match(patt)[1]);
	var previousPage, nextPage;

	if (currentPage == 1) {
		$(".previous-button").hide();
		nextPage = currentPage+1;
		$(".next-button").attr("href","project-"+nextPage+".html");
	} else if (currentPage == projectTotal) {
		$(".next-button").hide();
		previousPage = currentPage-1;
		$(".previous-button").attr("href","project-"+previousPage+".html");
	} else {
		nextPage = currentPage+1;
		$(".next-button").attr("href","project-"+nextPage+".html");	
		previousPage = currentPage-1;
		$(".previous-button").attr("href","project-"+previousPage+".html");	
	}
}




