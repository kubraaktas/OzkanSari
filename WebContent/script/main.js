function applyParallaxEffect() {
	jQuery('body').parallax({
		  'autoMove' : false,
	      'elements': [
	        {
	          'selector': 'div.outer',
	          'properties': {
	            'x': {
	              'background-position-x': {
	                'initial': 50,
	                'multiplier': 0.05
	              }
	            }
	          }
	        },
	        {
	          'selector': 'div.inner',
	          'properties': {
	            'x': {
	              'background-position-x': {
	                'initial': 0,
	                'multiplier': 0.3
	              }
	            }
	          }
	        }
	      ]
  });
}