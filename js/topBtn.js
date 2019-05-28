	let timer;
	let scrolled_dist;
	let topBtn = document.getElementById('top');

	window.addEventListener('scroll', function() {
		if(window.pageYOffset >= 800) {
			topBtn.style.display = 'block';
		} else {
			topBtn.style.display = 'none';
		}
	});

	topBtn.addEventListener( 'click', function() {
		scrolled_dist = window.pageYOffset;
		scrollToTop();
	})

	function scrollToTop() {
		if (scrolled_dist > 0) {
			window.scrollTo(0, scrolled_dist);
			scrolled_dist = scrolled_dist - 100;
			timer = setTimeout(scrollToTop, 10)
		} else {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}
