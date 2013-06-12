$(document).ready(function(){

	
	RepositionNav();
	
	$(window).resize(function(){
		RepositionNav();
	});	
	
	
	//.parallax(xPosition, adjuster, inertia, outerHeight) options:
	//xPosition - Horizontal position of the element
	//adjuster - y position to start from
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	if($(document).width() > 960){
        $("#part1").parallax("50%", -1400, 0.2, true);
        $("#part2").parallax("50%", 750, 0.1, true);
        $("#part3").parallax("50%", 2000, 0.1, true);
        $("#part4").parallax("50%", 2250, 0.1, true);
        $("#part5").parallax("50%", 3000, 0.1, true);
        $("#part6").parallax("50%", 3750, 0.1, true);
        $("#part7").parallax("50%", 4500, 0.1, true);
        $("#part8").parallax("50%", 5800, 0.1, true);
        $("#part9").parallax("50%", 6200, 0.7, true);
        $("#contact").parallax("50%", 6750,0.8, true);

        $("#part1 .pximage1").parallax("50%", 2000, 0.3, true);
        $("#part1 .pximage2").parallax("50%", 1100, 0.2, true);
        $("#part1 .pximage3").parallax("50%", 1100, 0.9, true);


        $("#part2 .pxarrows").parallax("50%", 2650, 0.5, true);
        $("#part2 .pxcircle1").parallax("50%", 2450, 0.5, true);
        $("#part2 .pxcircle2").parallax("50%", 6120, 0.1, true);
        $("#part2 .pxcircle3").parallax("50%", 2350, 0.7, true);
        $("#part2 .pxcircle4").parallax("50%", 2055, 1.3, true);
        $("#part2 .pximage").parallax("50%", 2150, 0.3, true);

        $("#part6 .pxphoto-left").parallax("50%", 7650, 0.5, true);
        $("#part6 .pxphoto-right").parallax("50%", 6980, 1.0, true);


        $("#part8 .pximage-right").parallax("50%", 6980, 0.4, true);
        $("#part8 .pximage-left").parallax("50%", 6980, 0.4, true);




        $("#contact .ribbon").parallax("50%", 7440, 0.7, true);
        //$("#contact .ribbon-shadow").parallax("50%", 7200, 0.4, true);

        $("#part3 .pxcircles").parallax("50%", 2680, 0.6, true);


        $("#part4 .pximage-left").parallax("50%", 3600, 0.8, true);
        $("#part4 .pximage-right").parallax("50%", 3700, 0.4, true);

        $("#part5 .pximage-left").parallax("50%", 4750, 0.4, true);
        $("#part5 .pximage-right").parallax("50%", 5500, 0.1, true);

        $("#part6 .pximage-left").parallax("50%", 6200, 0.2, true);
        $("#part6 .pximage-right").parallax("50%", 6200, 0.5, true);

        $("#folio4 .pximage-left").parallax("50%", 8000, 0.1, true);
        $("#folio4 .pximage-right").parallax("50%", 6100, 0.4, true);
    }


	
});