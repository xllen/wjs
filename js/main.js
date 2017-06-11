
'use strict';

$(function () {
	/*大小图切换*/
	function resize() {
		var windowWidth = $(window).width();
		var isSmallScroll = windowWidth < 768;
		$("#main_ad > .carousel-inner > .item").each(function (i,item) {
			var $item = $(item);
			var srcImage = $item.data(isSmallScroll ? 'image-sm' : 'image-lg');
			$item.css('backgroundImage','url("'+ srcImage +'")');
			if(isSmallScroll){
				$item.html('<img src="'+ srcImage +'" alt="小图" />');
			}else{
				$item.empty();
			}
		});
	}
	$(window).on('resize', resize).trigger('resize');
	/*标签页*/
	$('[data-toggle="tooltip"]').tooltip();
	/*导航横向滑动*/
	var $wapper = $(".nav-tabs");
	var width = 30;
	$wapper.children().each(function (index,element){
		width += element.clientWidth;
	});
	   	$wapper.css('width', width);
	/*新闻点击*/
	var $newsTitle = $(".news-title")
	$(".nav-news > li > a").on('click',function () {
		var $this = $(this);
		var title = $this.data('title');
		$newsTitle.text(title);
	});


	/*滑动轮播图*/
	var startX,endX;
	var offset = 50;
	var $carousel = $(".carousel");
	$carousel.on('touchstart',function (e) {
		startX = e.originalEvent.targetTouches
[0].clientX;
	});
	$carousel.on('touchmove',function (e) {
		endX = e.originalEvent.targetTouches
[0].clientX;
	});
	$carousel.on('touchend',function (e) {
		var distence = Math.abs(startX - endX);
		if(distence > offset){
			$(this).carousel(startX > endX ? 'next' : 'prev');
		}
	});
});

/*tooltips*/

