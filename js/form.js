// Contact Form
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  // Validation
  if (!name || !email || !message) {
    alert('Please fill all fields.');
    return;
  }
  
  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email.');
    return;
  }
  
  // Simulate submission (for Netlify, no action needed; it handles POST)
  alert('Message transmitted! Thanks for reaching out.'); // Replace with modal in prod
  form.reset();
});