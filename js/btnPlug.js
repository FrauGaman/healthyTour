let plugBtn = document.getElementsByClassName('plug');

for (let i = 0; i < plugBtn.length; i++) {
	plugBtn[i].addEventListener('click', function() {
		alert('Отклик на эту кнопку еще не добавлен');
	})
}