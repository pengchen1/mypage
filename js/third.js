$(function(){
	var swiper=new Swiper(".swiper",{
		pagination:".pagin",
		paginationClickable:true,
		autoplay:true,
		loop:true,
		speed:150000,
		autoplayDisableOnInteraction:false,
	});
	var swiper1=new Swiper(".forth-swiper",{
		pagination:".forth-pagination",
		paginationClickable:true,
		autoplay:true,
		loop:true,
		speed:1500,
		autoplayDisableOnInteraction:false,
		spaceBetween: 50,
		slidesPerView: "auto",
	})

	$(".upToHead").click(function(){
		$('body,html').animate({
			"scrollTop":0,
		},100);
		return false;
	});

});

window.onscroll=function(){
	var t=document.documentElement.scrollTop || document.body.scrollTop;
	/*console.log(t);*/
	if(t>0){
		$(".upToHead").fadeIn(500);
	}else{
		$(".upToHead").fadeOut(500);
	}
}
