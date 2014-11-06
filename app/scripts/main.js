(function($) {
  $(document).ready( function() {
  //enabling stickUp on the '.navbar-wrapper' class
	$('.navbar-wrapper').stickUp({
		parts: {
		  0: 'banner',
		  1: 'services',
		  //2: 'ourwork',
		  2: 'aboutus',
		  //4: 'blog',
		  3: 'contact'
		},
		itemClass: 'menuItem',
		itemHover: 'active',
		topMargin: 'auto'
		});		
	});
		
//	$('#da-slider').cslider({
//		autoplay	: true,
//		bgincrement	: 0,
//		interval    : 5000  
//	});


// logic for main banner text animation 
//$('#banner').superslides({
//	  animation: 'fade',
//	  play: false
//	});

// logic for map display
//<![CDATA[
    var map;

    function load() {
      if (GBrowserIsCompatible()) {
        map = new GMap2(document.getElementById("map"));
        map.setCenter(new GLatLng(-37.817682, 144.957595), 13);
        document.getElementById("map").checked = true;
        toggleZoom(false);
      }
    }

    function toggleZoom(isChecked) {
      if (isChecked) {
        map.enableScrollWheelZoom();
      } else {
        map.disableScrollWheelZoom();
      }
    }

    //]]>
}(jQuery));

