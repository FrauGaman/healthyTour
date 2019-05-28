window.onscroll = function() {
	let comparison_header = document.getElementsByClassName('comparison_header');
	let figure = document.getElementsByClassName('info_child');
	let price_header = document.getElementsByClassName('price_header')[0];
	let package_btn = document.getElementsByClassName('single_btn');
	let package_header = document.getElementsByClassName('package_header')[0];
	let package_box = document.getElementsByClassName('package_box')[0];
	let hotels_header = document.getElementsByClassName('hotels_header')[0];
	let team_header = document.getElementsByClassName('team_header')[0];
	let steps_item = document.getElementsByClassName('steps_item');
	let order_header = document.getElementsByClassName('order_header')[0];
	let healthyTour = document.getElementsByClassName('healthyTour')[0];


	//comparison section
	for (let i = 0; i < comparison_header.length; i++) {
		if (comparison_header[i].getBoundingClientRect().top < document.documentElement.clientHeight - 10) {
			comparison_header[i].classList.add('fadeInDownElem');
		}
	}

	//info section
	for (let i = 0; i < figure.length; i++) {
		if (figure[i].getBoundingClientRect().top < document.documentElement.clientHeight - 10) {
			figure[0].classList.add('fadeInLeftElem');
			figure[1].classList.add('fadeInDownElem');
			figure[2].classList.add('fadeInRightElem');
		}
	}

	//price section
	if (price_header.getBoundingClientRect().top < document.documentElement.clientHeight - 10) {
		price_header.classList.add('fadeInElem');
	}

	//package section
	for (let i = 0; i < package_btn.length; i++) {
		if (package_btn[i].getBoundingClientRect().top < document.documentElement.clientHeight - 10) {
			package_btn[i].classList.add('fadeInDownElem');
		}
	}
	if (package_header.getBoundingClientRect().top < document.documentElement.clientHeight - 10) {
		package_header.classList.add('fadeInElem');
	}
	if (package_box.getBoundingClientRect().top < document.documentElement.clientHeight - 10) {
		package_box.classList.add('fadeInElem');
	}

	//hotels section
	if (hotels_header.getBoundingClientRect().top < document.documentElement.clientHeight - 10) {
		hotels_header.classList.add('fadeInElem');
	}

	//team section
	if (team_header.getBoundingClientRect().top < document.documentElement.clientHeight - 10) {
		team_header.classList.add('fadeInElem');
	}

	//steps section
	for (let i = 0; i < figure.length; i++) {
		if (steps_item[i].getBoundingClientRect().top < document.documentElement.clientHeight - 10) {
			steps_item[0].classList.add('fadeInLeftElem');
			steps_item[1].classList.add('fadeInDownElem');
			steps_item[2].classList.add('fadeInRightElem');
			steps_item[3].classList.add('fadeInLeftElem');
			steps_item[4].classList.add('fadeInUpElem');
			steps_item[5].classList.add('fadeInRightElem');
		}
	}

	//order section
	if (order_header.getBoundingClientRect().top < document.documentElement.clientHeight - 10) {
		order_header.classList.add('fadeInElem');
	}

	//healthyTour section
	if (healthyTour.getBoundingClientRect().top < document.documentElement.clientHeight - 10) {
		healthyTour.classList.add('fadeInElem');
	}
	
}