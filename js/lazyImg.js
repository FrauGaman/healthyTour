function images() {
	let img = document.getElementsByTagName('img');
	for ( let i = 0; i < img.length; i++) {
		if (img[i].hasAttribute('data-src')) {
			img[i].setAttribute('src', img[i].getAttribute('data-src'));
			img[i].removeAttribute('data-src');
		}
	}
}
window.onload = images;