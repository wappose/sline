$(document).ready(function(){

	slideshow = setInterval(function() {
	    $('.index-slider-nav .next').click();
	}, 3500);
	
		
	$('#block-views-tumnaglar-startsidan-block').hover(function(ev){
		clearInterval(slideshow);
	}, function(ev){
		slideshow = setInterval(function() {
			$('.index-slider-nav .next').click();
		}, 3500);
	});

	$('.view-tumnaglar-startsidan').append('<div class="index-slider-nav"><div class="prev" data-value="prev"></div><div class="next" data-value="next"></div></div>');

	$('.views-row-1 .views-field-field-image').addClass('active');
	
	$('.view-tumnaglar-startsidan .views-field-field-image-1 img').each(function(e){
		var $this = $(this);
		var bigImgAlt = $this.attr('alt');
		var bigImgParent = $this.parent().parent('.views-field-field-image-1').siblings('.views-field-field-image');
		
		bigImgParent.append('<div class="big-img-text"><p>'+bigImgAlt+'</p><div class="arrow"></div></div>');
		$this.parent().append('<div class="big-img-text"><h2>'+bigImgAlt+'</h2></div>');
	});
	
	$('#block-views-tumnaglar-startsidan-block .views-field-field-image').click(function(){
		var $this = $(this);
		var siblings = $('#block-views-tumnaglar-startsidan-block .views-field-field-image');
		
		siblings.removeClass('active');
		$this.addClass('active');
		
		$('.view-tumnaglar-startsidan .views-field-field-image-1').hide();
		$this.siblings('.view-tumnaglar-startsidan .views-field-field-image-1').fadeIn();
	});
	
	$('#block-views-tumnaglar-startsidan-block .views-field-field-image').each(function(e){
		var $this = $(this);
		$this.attr('data-value', e);
	});
	
	$('.index-slider-nav div').click(function(){
		var $this = $(this);
		var dataVal = $this.data('value');
		var currActive = $('#block-views-tumnaglar-startsidan-block .views-field-field-image.active').data('value');
		
		$('#block-views-tumnaglar-startsidan-block .views-field-field-image.active').eq(currActive+1).trigger('click');
		
		if(dataVal == "next"){
			if(currActive == 2){
				$('#block-views-tumnaglar-startsidan-block .views-field-field-image').eq(0).addClass('active').trigger('click');
			} else {
				$('#block-views-tumnaglar-startsidan-block .views-field-field-image').eq(currActive+1).trigger('click');
			}
		} else {
			$('#block-views-tumnaglar-startsidan-block .views-field-field-image').eq(currActive-1).addClass('active').trigger('click');
		}
	});
	
});