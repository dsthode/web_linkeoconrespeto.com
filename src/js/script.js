var opts = {
	formato: '',
	ancho: 220,
	red: 0,
	green: 0,
	blue: 0
};

$(document).ready(function() {
	$('#color-picker').spectrum({
		color: "#000000",
		flat: true
	});
	$('input[type=radio][name=formato]').click(function(ev) {
		opts.formato = this.value;
		updateBadgeCode();
	});
	$('#color-picker').change(function(ev) {
		try {
			var tmp = hexToRGB($('#color-picker').spectrum('get').toHexString());
			var tmp1 = Math.round(tmp.red/10) * 10;
			if (tmp1 > 250) {
				tmp1 = 250;
			}
			opts.red = tmp1;
			tmp1 = Math.round(tmp.green/10) * 10;
			if (tmp1 > 250) {
				tmp1 = 250;
			}
			opts.green = tmp1;
			tmp1 = Math.round(tmp.blue/10) * 10;
			if (tmp1 > 250) {
				tmp1 = 250;
			}
			opts.blue = tmp1;
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
	if (opts.formato != null && opts.formato.length > 0) {
		var imgSrc = '//cdn.linkeoconrespeto.com/logos/' + 
			opts.formato + '/' + opts.ancho + '/linkeo_con_respeto_' + 
			opts.formato + '_' + opts.red + '_' + 
			opts.green + '_' + opts.blue + '.png';
		var badgeCode = '<a href="http://www.linkeoconrespeto.com" target="_blank" rel="nofollow">' +
			'<img src="' + imgSrc + '" width="220" height="' + 
			(opts.formato == 'cuadrado' ? 220 : 62) + '" alt="Logo de Linkeo con Respeto"></a>';
		$('#badge-code').val(badgeCode);
		$('#logo-color-pick').attr('src', imgSrc);
	}
};

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-59813409-1', 'auto');
ga('send', 'pageview');

