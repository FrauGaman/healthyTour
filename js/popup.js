let popupBtn = document.getElementsByClassName('popup_btn');
let popup = document.getElementsByClassName('popup')[0];
let closeBtn = document.getElementsByClassName('popup_close');
let priceBtn = document.getElementsByClassName('price_btn');
let popup_content = document.getElementsByClassName('popup_content')[0];

let moreBtn = document.getElementsByClassName('more_btn');
let popupMore = document.getElementsByClassName('popup_more');

let body = document.querySelector('body');


for (let i = 0; i < moreBtn.length; i++) {
	moreBtn[i].addEventListener('click', function() {
		popupMore[i].style.display = 'block';
		body.style.overflow = 'hidden';
		document.addEventListener('click', function(event) {
			if (event.target == popupMore[i]) {
				popupMore[i].style.display = 'none';
				body.style.overflow = 'auto';
			}
		} )
	})
}

for (let i = 0; i < popupBtn.length; i++) {
	popupBtn[i].addEventListener('click', function() {
		popup.style.display = 'block';
		body.style.overflow = 'hidden';
		document.addEventListener('click', function(event) {
			if(event.target == popup_content) {
				popup.style.display = 'none';
				body.style.overflow = 'auto';
			}
		})
	})
}

for (let i = 0; i < closeBtn.length; i++) {
	closeBtn[i].addEventListener('click', function(event) {
		event.preventDefault();
		popup.style.display = 'none';
		for (let j = 0; j < popupMore.length; j++) {
			popupMore[j].style.display = 'none';
		}
		body.style.overflow = 'auto';
	})
};

