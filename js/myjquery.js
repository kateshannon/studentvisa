// FAQ slider

$("#faq p").hide();
$("#faq h3").click(function () {
    $(this).next("#faq p").slideToggle(500);
    $(this).toggleClass("expanded");
});





// Selectors for different types of guides. Hides one not in use and highlights what was clicked.

    $("#showFrance").on("click",function () {
 		$(".guides").hide();	
		$("#france").show();
		$("div").removeClass("highlight");
		$("#showFrance").addClass("highlight");
    });

        $("#showItaly").on("click",function () {
 		$(".guides").hide();	
		$("#italy").show();
		$("div").removeClass("highlight");
		$("#showItaly").addClass("highlight");
    });

    $("#showSpain").on("click",function () {
 		$(".guides").hide();	
		$("#spain").show();
		$("div").removeClass("highlight");
		$("#showSpain").addClass("highlight");
    });

    $("#showGuide").on("click",function () {
 		$(".guides").hide();	
		$("#guide").show();
		$("div").removeClass("highlight");
		$("#showGuide").addClass("highlight");
    });




// function showFrance(){
// 	$(".guides").hide();	
// 	$("#france").show();
// }