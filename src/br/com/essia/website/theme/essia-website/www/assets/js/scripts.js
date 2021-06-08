$(document).ready(function(){

	$('.brand-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots:false,
		responsive:{
		    0:{
		        items:1,
		        nav:false,
		    },
		    480:{
		    	items:2,
		        nav:false,
		    },
		    600:{
		        items:3
		    },
		    1000:{
		        items:5
		    }
		}
	});

	$('.testimonial-carousel').owlCarousel({
		loop:true,
		margin:30,
		items:1,
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1,
				nav:false,
			},
			576:{
				items:1,
				nav:true,
			}
		}
	});
	
	$('article.lum-content header.lum-content-header').remove()
})