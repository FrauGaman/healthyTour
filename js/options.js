let order_btn = document.querySelector('.order_btn');
let list = document.querySelector('.order_list');
let select = document.querySelector('.selector_text');
let li = document.getElementsByClassName('order_list__item');
let input = document.querySelector('input[type="hidden"');

order_btn.addEventListener('click', function() {
	order_btn.classList.toggle("order_active");
	list.classList.toggle("order_list__active");
})

for (var i = 0; i < li.length; i++) {
	li[i].addEventListener('click', function(event) {
		select.innerHTML = event.target.innerHTML;
		input.setAttribute('value', event.target.innerHTML);
		order_btn.classList.toggle("order_active");
		list.classList.toggle("order_list__active");
	})
}