var socket = io();

socket.on('welcome', function(data) {
  $('<li>').text(data).appendTo('#message-log');
});

socket.on('message', function(data) {
  console.log(data);
  $('<li>').text(data).appendTo('#message-log');
})

$('#chat-send').on('click', function() {
  var text = $('#chat-text').val();
  socket.emit('message', text);
  $('#chat-text').val('');
});
