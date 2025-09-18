// Core functionality: Dark mode, hamburger, particles, typing, scroll reveals

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
  const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Hero Typing Effect
const text = "Robert Muiruri Kibugi";
const heroText = document.getElementById('hero-text');
let i = 0;

function typeWriter() {
  if (i < text.length) {
    heroText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}

if (heroText) {
  typeWriter();
}

// Particle Background (Canvas)
const canvas = document.getElementById('particles');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Scroll Reveals
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(sec => observer.observe(sec));

// Close mobile menu on link click
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('active');
    hamburger.classList.remove('active');
  });
});