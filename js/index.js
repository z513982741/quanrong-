$(function() {

	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay: 3000
    });
    
    
    $('.news-nav li').on('click',function(){
    	
    	var _index = $(this).index();
    	$(this).addClass('article').siblings().removeClass('article');
    	$('.news-box > li').eq(_index).addClass('article').siblings().removeClass('article');
    	
    })
    
})