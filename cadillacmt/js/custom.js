
$('document').ready(function() {


  // Initialize Analytics.js
  analytics.initialize({
    'Google Analytics' : 'UA-XXXXXX-XX'
  });

  var contentRowHeight = $('section#center-panel-wrapper').height();
  	console.log('center:' + contentRowHeight );
  	contentRowHeight =Math.max($('#center-panel-wrapper').height(), $('#left-panel-wrapper').height(),$('#right-panel-wrapper').height() )
  	console.log('max is:' + contentRowHeight );
	$('#left-panel-wrapper').css('height', contentRowHeight);
	$('#right-panel-wrapper').css('height', contentRowHeight);
	if ($('#center-panel-wrapper').height() < contentRowHeight) {
		$('#center-panel-wrapper').css('height', contentRowHeight);
	}
});


$(window).load(function() {
	// set height of wrapper s.t. left & right sidebars (inherit) fill in height.
	//var contentRowHeight = Math.max($('#center-panel-wrapper').height(), $('#left-panel-wrapper').height(),$('#right-panel-wrapper').height() )

	//console.log('max Height is: ' + contentRowHeight);
	//$('#content-wrapper').css('height', contentRowHeight);
});