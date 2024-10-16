function appendMessage(message, sender) {
  const chatBox = document.getElementById('chatBox');
  const messageElement = document.createElement('div');
  messageElement.textContent = `${sender}: ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const userInput = document.getElementById('userInput');
  const message = userInput.value;
  appendMessage(message, 'You');

  fetch('https://www.chatbase.co/chatbot-iframe/jCUoeTiY49qti8pwHi9Zk', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: message,
    }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('API Response:', data); // Log the API response for debugging
    appendMessage(data.response, 'Bot');
  })
  .catch(error => {
    console.error('Error fetching the API:', error);
    appendMessage('Error: Could not retrieve response from API', 'Bot');
  });

  userInput.value = '';
}

