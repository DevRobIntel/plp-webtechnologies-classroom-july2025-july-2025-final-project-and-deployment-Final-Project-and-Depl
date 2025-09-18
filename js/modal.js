// Project Modal
const modals = document.querySelectorAll('[data-modal]');
const modalClose = document.querySelectorAll('.close');

modals.forEach(modal => {
  modal.addEventListener('click', () => {
    const modalId = modal.dataset.modal;
    document.getElementById(modalId).style.display = 'flex';
  });
});

modalClose.forEach(close => {
  close.addEventListener('click', () => {
    close.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});