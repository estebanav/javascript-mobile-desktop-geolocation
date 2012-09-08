//
// javascript-mobile-desktop-geolocation
// https://github.com/estebanav/javascript-mobile-desktop-geolocation
//
// Copyright J. Esteban Acosta Villafañe
// Licensed under the MIT licenses.
//
// Based on Stan Wiechers > geo-location-javascript v0.4.8 > http://code.google.com/p/geo-location-javascript/
//
// Revision: $Rev: 01 $: 
// Author: $Author: estebanav $:
// Date: $Date: 2012-09-07 23:03:53 -0300 (Fri, 07 Sep 2012) $:    


var geo_position_js_simulator=function(){

	var pub = {};
	var current_pos=null;
	pub.init = function(array)
	{
		var next=0;
		for (i in array)
		{
				if(i==0)
				{
					current_pos=array[i];
				}
				else
				{
					setTimeout((function(pos) { 
					      return function() { 
					        current_pos=pos; 									
					      } 
					    })(array[i]),next);
				}
				next+=array[i].duration;							
		}
	}

	pub.getCurrentPosition = function(locationCallback,errorCallback)
	{
		locationCallback(current_pos);
	}
	return pub;
}();