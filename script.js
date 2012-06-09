var original_height = 682;
var original_font   = 16;
var adjust 					= true;

$(document).ready(function() {
	set_timer();
	if(adjust) {
		adjust_dimensions();
		$(window).resize(adjust_dimensions);
	}
});

function adjust_dimensions() {
	var rate = $(window).height() / original_height;
	var font = rate * original_font;
	console.log(font);
	$('body').css('font-size', font + 'px');
}

function set_timer(){
	var today = new Date(),
			event = new Date(2012, 7, 18, 16, 30, 0, 0),
			diff  = date_diff(event, today);
	$('#dias').text( diff.days );
	$('#horas').text( diff.hours );
	$('#minutos').text( diff.minutes );
	$('#segundos').text( diff.seconds );
	setTimeout('set_timer()',500);
}

function date_diff(later, earlier) {
	var diff = time_break(later-earlier);
	var result = {
		days:    diff.days,
		hours:   Math.round(diff.hours   % 24),
		minutes: Math.round(diff.minutes % 60),
		seconds: Math.round(diff.seconds % 60),
	}
	for(r in result) result[r] = parse_time(result[r]);
	return result; 
}

function time_break(ms) {
	var seconds = Math.round(ms/1000),
			minutes = Math.round(seconds/60),
			hours   = Math.round(minutes/60),
			days    = Math.round(hours/24);
	return {
		seconds: seconds,
		minutes: minutes, 
		hours:   hours,
		days:    days
	}
}

function parse_time(t) {
	if(t<10) return "0" + t;
	else return t;
}
