function appendMessage(message, sender) {
  const chatBox = document.getElementById('chatBox');
  const messageElement = document.createElement('div');
  messageElement.textContent = sender + ': ' + message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const userInput = document.getElementById('userInput');
  const message = userInput.value;
  appendMessage(message, 'You');

  // Replace this URL with your Chatbase API URL
  fetch('https://your-chatbase-api-url.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: message,
    }),
  })
  .then(response => response.json())
  .then(data => {
    appendMessage(data.response, 'Bot');
  });

  userInput.value = '';
}
