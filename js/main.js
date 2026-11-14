;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};


	var burgerMenu = function() {
		// 1. Khi bấm vào nút toggle (Menu) thì hiệu ứng rớt xuống / cuộn lên
		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			$('#colorlib-main-nav').slideToggle(300); // 300ms là tốc độ trượt
			$(this).toggleClass('active');
		});

		// 2. Khi click vào các link trong menu, ẩn menu đi và cuộn mượt đến section
		$('#colorlib-main-nav a[href^="#"]').on('click', function(e) {
			var targetId = $(this).attr('href');
			var $target = $(targetId);

			if ($target.length) {
				e.preventDefault();
				
				// Thu gọn menu lại
				$('#colorlib-main-nav').slideUp(300);
				$('.js-colorlib-nav-toggle').removeClass('active');

				// Cuộn mượt màn hình đến đúng ID section
				$('html, body').animate({
					scrollTop: $target.offset().top
				}, 800);
			}
		});
	};
// Xử lý click vào menu để cuộn mượt đến section (One-page scroll)


	$(function(){
		burgerMenu();
	});
}());