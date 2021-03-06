var _form = document.querySelector('.js-form'),
	 _from = document.querySelector('.js-name'),
	 _message = document.querySelector('.js-field'),
	 _chat = document.querySelector('.js-chat');
	 
_form.addEventListener('submit', event => {
  event.preventDefault();
  socket.emit('message', '<strong>' + _from.value + ' :</strong> ' + _message.value);
  _message.value = '';
  _message.focus();
});

var socket = io.connect();
socket.addEventListener('message', msg => {
  var _html = '<li class="message">' + msg + '</li>';
  _chat.innerHTML += _html;
});