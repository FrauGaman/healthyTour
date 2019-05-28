//icon
let mobMenu_icon = document.querySelector('.mobMenu');
let menu = document.querySelector('.menu');
let item = document.getElementsByClassName('mob_menu__item');
mobMenu_icon.addEventListener('click', function() {
	mobMenu_icon.classList.toggle("mobMenu_active");
	menu.classList.toggle("menu_active");
})

for (let i = 0; i < item.length; i++ ) {
	item[i].addEventListener('click', function() {
		mobMenu_icon.classList.toggle("mobMenu_active");
		menu.classList.toggle("menu_active");
	})
}


