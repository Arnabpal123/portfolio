function showAlert(projectName) {
    alert("More information about " + projectName);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});