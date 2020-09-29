(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

	// START MENU JS
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 50) {
			$('.main-nav').addClass('menu-shrink');
		} else {
			$('.main-nav').removeClass('menu-shrink');
		}
	});				

    // Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

	// Sorting Portfolio JS
	$('#container').mixItUp();

	// Nice Select JS
	$('select').niceSelect();

	// Counter JS
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// Companies Slider JS
	$('.companies-slider').owlCarousel({
		loop:true,
		margin: 0,
		nav: false,
		dots: true,
		smartSpeed: 1000,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:4,
			}
		}
	});

	// Profile Slider JS
	$('.profile-slider').owlCarousel({
		loop:true,
		margin: 0,
		nav: false,
		dots: true,
		smartSpeed: 1000,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:4,
			}
		}
	});

	// Subscribe form
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		// handle the invalid form...
		formErrorSub();
		submitMSGSub(false, "Please enter your email correctly.");
		} else {
		// everything looks good!
		event.preventDefault();
		}
	});
	// Banner Text animation
	consoleText(['Book Your Desired Service'], 'text',['lightblue']);
	function consoleText(words, id, colors) {
		if (colors === undefined) colors = ['#fff'];
		var visible = true;
		var con = document.getElementById('console');
		var letterCount = 1;
		var x = 1;
		var waiting = false;
		var target = document.getElementById(id)
		target.setAttribute('style', 'color:' + colors[0])
		window.setInterval(function() {
	  
		  if (letterCount === 0 && waiting === false) {
			waiting = true;
			target.innerHTML = words[0].substring(0, letterCount)
			window.setTimeout(function() {
			  var usedColor = colors.shift();
			  colors.push(usedColor);
			  var usedWord = words.shift();
			  words.push(usedWord);
			  x = 1;
			  target.setAttribute('style', 'color:' + colors[0])
			  letterCount += x;
			  waiting = false;
			}, 1000)
		  } else if (letterCount === words[0].length + 1 && waiting === false) {
			waiting = true;
			window.setTimeout(function() {
			  x = -1;
			  letterCount += x;
			  waiting = false;
			}, 1000)
		  } else if (waiting === false) {
			target.innerHTML = words[0].substring(0, letterCount)
			letterCount += x;
		  }
		}, 120)
		window.setInterval(function() {
		  if (visible === true) {
			con.className = 'console-underscore hidden'
			visible = false;
	  
		  } else {
			con.className = 'console-underscore'
	  
			visible = true;
		  }
		}, 400)
	  }
	function callbackFunction (resp) {
		if (resp.result === "success") {
		formSuccessSub();
		}
		else {
		formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
		$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
		$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
		var msgClasses = "validation-success";
		} else {
		var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
	
	// AJAX MailChimp
	$(".newsletter-form").ajaxChimp({
		url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});

	// PRELOADER
	jQuery(window).on('load',function(){
		jQuery(".loader").fadeOut(1000);
	});

	// Wow JS
	new WOW().init();

	// Accordion JS
	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
	$('.accordion a').on('click', function(j) {
		var dropDown = $(this).closest('li').find('p');
		$(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.accordion').find('a.active').removeClass('active');
			$(this).addClass('active');
		}
		dropDown.stop(false, true).slideToggle(300);
		j.preventDefault();
	});

	// Back to top 
	$('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-dotted-up"></i></div>');
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	}); 
	$('#toTop').on('click', function(){
		$("html, body").animate({ scrollTop: 0 }, 900);
		return false;
	});
	
}); 	
})(jQuery);
