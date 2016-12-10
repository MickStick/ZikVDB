$(function(){
	$('header > button').on('click', function(e){
		e.preventDefault();
		$('header > nav').toggleClass('drop');
		//$('.container').toggleClass('cont-drop');
	});
	
	////////////////////////////////// SlideShow /////////////////////////////////////////
	var slides = $('.slide');
	var statslides = $('.stat-slide');
	var count = 0;
	var statcount = 0;
	var AnittlCount = slides.length;
	var StatTtlCount = statslides.length;
	AniSlideShow();
	StatSlideShow();
	function AniSlideShow(){
		var $this = slides.eq(count);
		$this.fadeIn(1000).delay(2000).fadeOut(1000, function(){
			count < AnittlCount - 1 ? count++ : count = 0;
			AniSlideShow();
		});	
	}
	//////////////////////////////////////////////////////////////////////////////////////
	function StatSlideShow(){
		if(statcount > StatTtlCount){
			statcount = 0;
		}
		if(statcount < 0){
			statcount = StatTtlCount - 1;
		}
		var $this = statslides.eq(statcount);
		$this.fadeIn(1000);
		
		$('.slide-left').on('click',function(e){
			statcount = statcount - 1;
			statslides.fadeOut(1000).delay(1000);
			StatSlideShow();
			
		});
		$('.slide-right').on('click',function(e){
				statcount = statcount + 1;
				statslides.fadeOut(1000).delay(1000);
				StatSlideShow();
		});	
	}
	
	//////////////////////////////////////////////////////////////////////////////////////
})