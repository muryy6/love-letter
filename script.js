// script.js

// Reveal Hidden Messages on Click
document.getElementById('message1').addEventListener('click', function() {
    document.getElementById('hidden-message1').style.display = 'block';
    this.style.display = 'none'; // Hide the "Click here" after it's clicked
});

document.getElementById('message2').addEventListener('click', function() {
    document.getElementById('hidden-message2').style.display = 'block';
    this.style.display = 'none'; // Hide the "Click here" after it's clicked
});

// Heart Click for Love Message
document.getElementById('heart').addEventListener('click', function() {
    document.getElementById('love-message').style.display = 'block';
});

// Form Submission
document.getElementById('submit-message').addEventListener('click', function() {
    var message = document.getElementById('love-message-input').value;
    if (message.trim()) {
        document.getElementById('thank-you-message').style.display = 'block';
        document.getElementById('love-message-input').value = ''; // Clear input after submission
    } else {
        alert('Please write a message first! 💌');
    }
});
