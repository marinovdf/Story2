Cufon.replace('h1, h2, h3, h4, h5, h6, p, a', { fontFamily: 'DINCyr-Regular', hover: true });
Cufon.replace('.medium', { fontFamily: 'DINCyr-Medium', hover: true });
Cufon.replace('strong, .strong, h1 strong, h2 strong, h3 strong, h4 strong, h5 strong, h6 strong, .btn', { fontFamily: 'DINCyr-Bold', hover: true });
Cufon.replace('#part1 h1',{fontFamily:'DINCyr-Regular',hover:true, textShadow:'-2px 2px 3px rgba(0,0,0, .5)'});
Cufon.replace('#part1 h2',{fontFamily:'DINCyr-Regular',hover:true, textShadow:'-1px 1px 1px #fff'});
/* function for site scrolling */
function goToByScroll(id){
	$('html,body').animate({scrollTop: $("#"+id).offset().top},1700, 'easeInOutExpo');
}

$(document).ready(function() {
//resize video on small screen
    if(document.width <= 980){
        $('.video iframe').width('100%');
        $('.video iframe').height(($(this).width())/1.9);

        $(window).on('resize',function(){
            $('.video iframe').height(($(this).width())/1.9);
        })
    }

$(window).scrollTop(1); // fix for parallax init
window.sectionHeight = 860; //height of 1 slide, css: .section class height value

$(window).bind("scroll", function(){

	/*
	
	scrollPosition - is the current scroll position
	selector - this will gave us a number of .section in which we will be after scroll and we'll be able to select proper menu element
	
	*/
	
	scrollPosition = $(window).scrollTop();
	selector = (scrollPosition/sectionHeight).toFixed(0);
	
	/* this is only for folio sections, the upper menu has no folio2, folio3, folio4 elements so we select the #folio1 in #menu */
	
	if (selector > 3 && selector < 7) {
		$("#menu ul li").parent().find("li").removeClass("current");
		$("#menu ul li:eq(3)").addClass("current");
		
		$("#nav ul li").parent().find("li").removeClass("current");
		$("#nav ul li:eq("+selector+")").addClass("current");
	}
	
	else {
		$("#menu ul li, #nav ul li").parent().find("li").removeClass("current");
		$("#menu ul li:eq("+selector+"), #nav ul li:eq("+selector+")").addClass("current");
	}
});



$(".ribbon a").click(function(){

	$("#menu").find("a").removeClass("current");
	$("#menu li:first-child a").addClass("current");

});
});
