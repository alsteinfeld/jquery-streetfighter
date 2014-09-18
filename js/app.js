$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		// unsure about the need for the finish method
		.animate(
			{'left': '300px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-212px');
			}
		);
  })
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		// ryu goes back to his ready position
	});
	// having trouble getting the keydown and keyup funcitons to trigger
	$('body').keydown(function(event) {
		if (event.which == 88) {
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(event) {
		if (event.which == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});
});

// What's the purpose of the [] parameter?
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}