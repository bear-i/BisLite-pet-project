$(document).ready(function() {

	$('.menu-trigger').click(function(e){
      e.preventDefault();
      $('.menu').slideToggle(500);
      $('.submenu').removeAttr('style');
  	});

	$(window).resize(function(){
		if($(window).width()>768){
	      $('.menu, .submenu').removeAttr('style');
	    }
	});

	if($(window).width()>992){
	  $('.menu__item-with-submenu').hover(function(e){
	      e.preventDefault();
	      $('.submenu').slideToggle(300);
	  });
	}

   if($(window).width()<992){
   	$('.menu__item-with-submenu, .menu__item-with-submenu a').click(function(e){
   		e.preventDefault();
	    $('.submenu').slideToggle(300);
	    e.stopPropagation();
	});
   }

   $('.portfolio__pages-nums a').click(function(e){
      e.preventDefault();
      if (!$(this).hasClass("special")){
        $(this).parents('div').find('a.active').removeClass('active');
        $(this).addClass('active');
      }
   });
   
   $('.slider').slick({
    autoplay: true,
    dots: true,
    arrows: false
   });

   $('.latest-works__slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      draggable: true,
      responsive: [
      { 
        breakpoint: 992,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:570,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 569,
        settings:{
          slidesToShow:2,
          slidesToScroll: 1
        }
      }
    ]
   });
   
});



   //portfolio

   (function(){

    var $imgs = $('#portfolio__gallery figure');
    var $buttons = $('#portfolio__buttons');
    var tagged = {};

    $imgs.each(function(){
      var img = this;
      var tags=$(this).data('tags');

      if(tags){
        tags.split(',').forEach(function(tagName){
          if(tagged[tagName]==null){
            tagged[tagName] = [];
          }
          tagged[tagName].push(img);
        });
      }
    });

    $('<button/>', {
      text: 'All',
      class:'active',
      click: function(){
        $(this).addClass('active').siblings().removeClass('active');
        $imgs.show();
      }
    }).appendTo($buttons);

    $.each(tagged, function(tagName){
      $('<button/>', {
        text: tagName + '(' + tagged[tagName].length + ')',
        click: function(){
          $(this).addClass('active').siblings().removeClass('active');
          $imgs.hide().filter(tagged[tagName]).show();
        }
      }).appendTo($buttons)
    });
   }());



function initMap(){
  	var coords ={lat:49.872358, lng:-97.401956};
  	var map = new google.maps.Map(document.getElementById('map'), {
  		zoom:14,
  		center:coords,
  		disableDefaultUI: true
  	});
  	var marker = new google.maps.Marker({
  		position: coords,
  		map: map
  	});
  }