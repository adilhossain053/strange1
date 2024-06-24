document.getElementById('beepButton').addEventListener('click', function() {
    fetch('https://your-app-name.herokuapp.com/api/beep/play')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
});
