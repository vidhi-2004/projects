// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Color changer for phone
const phoneImg = document.getElementById('phoneImg');
const colors = document.querySelectorAll('.color');

colors.forEach(color => {
  color.addEventListener('click', () => {
    const selectedColor = color.getAttribute('data-color');
    
    // Simple placeholder image change based on color
    if (selectedColor === '#d4af37') {
      phoneImg.src = "https://via.placeholder.com/500x600/d4af37/000000?text=Gold";
    } else if (selectedColor === 'silver') {
      phoneImg.src = "https://via.placeholder.com/500x600/c0c0c0/000000?text=Silver";
    } else if (selectedColor === '#ff5757') {
      phoneImg.src = "https://via.placeholder.com/500x600/ff5757/ffffff?text=Red";
    } else {
      phoneImg.src = "https://via.placeholder.com/500x600/222233/ffffff?text=NeoPhone+X";
    }
  });
});

// Buy button alert (demo interactivity)
document.querySelector('.cta-btn').addEventListener('click', () => {
  alert('Added to cart! Proceed to checkout.');
});