var opts = {
	formato: '',
	red: 0,
	green: 0,
	blue: 0
};

$(document).ready(function() {
	$('#color-picker').spectrum({
		color: "#000000",
		flat: true
	});
	$('#format-picker').change(function(ev) {
		opts.formato = $('#format-picker').value();
		updateBadgeCode();
	});
	$('#color-picker').change(function(ev) {
		try {
			var tmp = hexToRGB($('#color-picker').spectrum('get').toHexString());
			opts.red = tmp.red;
			opts.green = tmp.green;
			opts.blue = tmp.blue;
			updateBadgeCode();
		} catch (err) {}
	});
});

function hexToRGB(hexValue) {
	var red = 0, green = 0, blue = 0;
	if (hexValue != null && hexValue.length == 7 && typeof hexValue === 'string') {
		try {
			red = parseInt(hexValue.substring(1, 3), 16);
			green = parseInt(hexValue.substring(3, 5), 16);
			blue = parseInt(hexValue.substring(5, 7), 16);
		} catch (err) {
			red = green = blue = 0;
		}
	}
	return {red:red, blue:blue, green:green};
};

function updateBadgeCode() {
	return '<a href="http://www.linkeoconrespeto.com" target="_blank"><img src="//cdn.linkeoconrespeto.com/logos/linkeo_con_respeto_' + opts.formato + '_' + opts.red + '_' + opts.green + '_' + opts.blue + '.png" width="220" height="' + (opts.formato == 'cuadrado' ? 220 : 62) + '" alt="Logo de Linkeo con Respeto"></a>';
};
