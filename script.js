// script.js
document.getElementById('jemForm').addEventListener('submit', function(event) {
 event.preventDefault();

 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;
 const code = document.getElementById('code').value;

 fetch('/submit', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json'
 },
 body: JSON.stringify({ email, password, code })
 })
 .then(response => response.json())
 .then(data => {
 alert(data.message);
 })
 .catch(error => {
 console.error('Error:', error);
 });
});
