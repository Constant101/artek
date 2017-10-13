$(function() {

(function($){               
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children(".tabs-wrap").hide();
                $(tabs).children(".tabs-wrap").eq(i).show();
                $(".product-right").children("div").children("div").removeClass("active");
                $(".product-right").children("div").children("div").eq(i).addClass("active");

            }
                                
            showPage(0);                
            
            $(".product-right").children("div").children("div").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(".product-right").children("div").children("div").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });             
        };      
        return this.each(createTabs);
    };  

})(jQuery);
$(".products-wrap > .products-row").lightTabs();
 $(".product-right").children("div").children("div").click(function(){
 	$(".product-right").children("div").children("div").show();
 	
 	
 	if(screen.width>=1025){
 	$(this).hide();
  }
 });
 


 $(function() {
if(screen.width>=767){
 	 $(".brownie").click(function(){
 		$('body').css('background', '#763832');
 		return false;
 	})
 	$(".capuchino").click(function(){
 		$('body').css('background', '#ad8062');
 		return false;
 	})
 	$(".banana").click(function(){
 		$('body').css('background', '#f5a623');
 		return false
 	});
} else {
 	 $(".brownie").click(function(){
 		$('.product-left').css('background', '#763832');
 		return false;
 	})
 	$(".capuchino").click(function(){
 		$('.product-left').css('background', '#ad8062');
 		return false;
 	})
 	$(".banana").click(function(){
 		$('.product-left').css('background', '#f5a623');
 		return false
 	});	
}
 });


$(function() {
	$(".plus-pointer").click(function(){
		$(this).toggleClass('active');
	if(screen.width<=767){
		if ($(this).hasClass('active')) {
			$('.hidden-on-mobile1').css('visibility', 'hidden');
			$('.advice-wrap').css('top','145px');
			$('.content-description h4').css('top','222px');
			$('.content-description').css('max-height','710px');
		} else {
			$('.advice-wrap').css('top','-195px');
			$('.content-description h4').css('top','-123px');
			$('.content-description').css('max-height','370px');
		}
	}});
});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".nav").slideToggle();
		return false;
	});
		$(".main-foot .toggle-mnu").click(function() {
		$("html, body").animate({scrollTop: $(document).height() + 200}, "slow");
		return false;
	});


