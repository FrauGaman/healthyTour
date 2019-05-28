$(document).ready(function() {

	var form = $('form');
	var thx = $('.thank:first');

	for (var i = 0 ; i < form.length; i++) {

		if (form[i].getAttribute('id') == 'order_form') {
			$("#order_form").submit(function() {
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: $(this).serialize()
				}).done(function() {
					$(this).find("input").val("");
					thx.css('display', 'block');
					setTimeout(function() {
						thx.css('display', 'none');
					}, 1000);
					$("#order_form").trigger("reset");
				});
				return false;
			});
		} else if (form[i].getAttribute('id') == 'popup_form') {
			$("#popup_form").submit(function() {
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: $(this).serialize()
				}).done(function() {
					$(this).find("input").val("");
					thx.css('display', 'block');
					setTimeout(function() {
						thx.css('display', 'none');
					}, 1000);
					$("#popup").css('display', 'none');
					$('body:first').css('overflow', 'auto')
					$("#popup_form").trigger("reset");
				});
				return false;
			});
		}
	};
})