const socket = io('https://your-backend-url.glitch.me'); // Replace with your backend URL

const button = document.getElementById('answer-button');
const firstClicker = document.getElementById('first-clicker');

button.addEventListener('click', () => {
    socket.emit('clicked', 'Player 1');  // Send a "clicked" event
});

socket.on('show-clicker', (playerName) => {
    firstClicker.textContent = playerName + ' clicked first!';
    button.disabled = true;  // Disable the button after first click
});
