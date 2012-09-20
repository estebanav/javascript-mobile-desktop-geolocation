# javascript-mobile-desktop-geolocation
=====================================

Mobile and Desktop Javascript Library for Geolocation Fallback. Based on geo-location-javascript framework (http://code.google.com/p/geo-location-javascript).

## Target Browsers

The aim of this library is to provide support for Geolocation mainly for old browsers such us:

- Microsoft Internet Explorer 6, 7, and 8
- Blackberry
- Palm OS

## Usage

Include Javascript Library file called geoPosition.js in your source code:
~~~ html
<script src="js/geoPosition.js" type="text/javascript" charset="utf-8"></script>
~~~ 
then call it this way:
~~~ html
<script type="text/javascript">
	if(geoPosition.init()){  // Geolocation Initialisation
			geoPosition.getCurrentPosition(success_callback,error_callback,{enableHighAccuracy:true});
	}else{
			// You cannot use Geolocation in this device
	}
	geoPositionSimulator.init(); 

	// p : geolocation object
	function success_callback(p){
		// p.latitude : latitude value
		// p.longitude : longitude value
	}

	function error_callback(p){
		// p.message : error message
	}
</script>
~~~ 
If you want to use simulated geoPositions for tasks such us mocking up you must include geoPositionSimulator.js 
~~~ html
<script src="js/geoPositionSimulator.js" type="text/javascript" charset="utf-8"></script>
~~~ 
Then you have got to declare an array with the simulated locations this way:
~~~ html
<script type="text/javascript">
	var locations=new Array({ coords: {
										latitude: 	30.2847664,
										longitude: -97.7264275
										} 
									}); // Simulated Positions
	if(geoPosition.init()){  // Geolocation Initialisation
			geoPosition.getCurrentPosition(success_callback,error_callback,{enableHighAccuracy:true});
	}else{
			// You cannot use Geolocation in this device
	}
	geoPositionSimulator.init(); 
	
	// p : geolocation object
	function success_callback(p){
		// p.latitude : latitude value
		// p.longitude : longitude value
	}

	function error_callback(p){
		// p.message : error message
	}
</script>
~~~ 

For further examples of these you can check example files:
* [demo-no-simulation.html](https://github.com/estebanav/javascript-mobile-desktop-geolocation/blob/master/demo-no-simulation.html) -- 'Geolocate with no simulation'
* [demo-no-simulation-gmap.html](https://github.com/estebanav/javascript-mobile-desktop-geolocation/blob/master/demo-no-simulation-gmap.html) -- 'Geolocate with no simulation with Google Maps'
* [demo-simulation.html](https://github.com/estebanav/javascript-mobile-desktop-geolocation/blob/master/demo-simulation.html) -- 'Geolocate with simulation'

## Contributing 

1. Fork it.
2. Create a branch (`git checkout -b my_markup`)
3. Commit your changes (`git commit -am "Magic Added"`)
4. Push to the branch (`git push origin my_markup`)
5. Open a [Pull Request]
6. Enjoy a refreshing Cherry Coke and wait

## Javascript Coding Guidelines

My first rule of thumb is "Keep it simple, stupid!". So, please take a look at Google JavaScript Style Guide (http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)

## Contributors

* Main Code Monkey :: J. Esteban Acosta Villafañe ( https://github.com/estebanav  | http://us.linkedin.com/in/estebanav )

## License

This proyect was forked and continued develop under a MIT Licensing

The MIT License (MIT)
Copyright (c) 2012  J. Esteban Acosta Villafañe

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.