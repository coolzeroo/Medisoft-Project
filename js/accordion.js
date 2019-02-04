////////////// Accordion  /////////////
(function($) {

$.fn.accordion = function(options) {

  if (!this.length) { return this; }

  var opts = $.extend(true, {}, $.fn.accordion.defaults, options);

  this.each(function() {
    var $this = $(this).find('dl');

    var $all_panels = $this.find("dd");

    if(Modernizr.cssanimations)
    {
      $this.find("dt:first .arrow").addClass('right-anim');
    }
    else
    {
      $this.find("dt:first .arrow").addClass('down');
    }

    $this.find("dt > h2").on('click', function(event){

      event.preventDefault();

      if(!$(this).parent().hasClass('active'))
      {

       $all_panels.slideUp();
       var $active = $('dl .active').removeClass('active');

       $(this).parent().next().slideDown().addClass('active');
       $(this).parent().addClass('active');

       if(Modernizr.cssanimations)
       {
         $active.filter('dt').find('.arrow').removeClass('down-anim');
         $(this).parent().find('.arrow').addClass('down-anim');
       }
       else
       {
         $active.filter('dt').find('.arrow').removeClass('down');
         $(this).parent().find('.arrow').addClass('down');
       }
      }

    });

  });

  return this;
};

// default options
$.fn.accordion.defaults = {};
})(jQuery);

// call plugin
$(".accordion").accordion();

//////////// Collapse ////////////
$('.collapse').on('click',function(e){
  e.preventDefault();
  $(this).toggleClass('active');
});


/// search box ///

$( "#header-plugin" ).load( "https://vivinantony.github.io/header-plugin/", function() {
	$("a.back-to-link").attr("href", "http://blog.thelittletechie.com/2015/04/search-box-animation-using-css.html#tlt")
});

//script here
$("#inpt_search").on('focus', function () {
	$(this).parent('label').addClass('active');
});

$("#inpt_search").on('blur', function () {
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});

// add header

$(document).ready(function(){
  $.get("./data/header.html", function(data) {
    $("#header").html(data);
  });
});
