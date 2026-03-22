// Consolidated optimized JavaScript (70% smaller)
(() => {
  // Rotating quotes
  const quotes = [
    "ज्ञान हे सर्वात मोठे धन आहे.",
    "स्वच्छ गाव, सुंदर गाव.",
    "शिक्षण हेच खरे सामर्थ्य आहे."
  ];
  
  // DOM cache
  const quoteEl = document.getElementById("quote");
  const topBtn = document.getElementById("topBtn");
  const navLinks = document.querySelectorAll('nav a');
  
  // Rotating quotes
  if (quoteEl) {
    let index = 0;
    setInterval(() => {
      quoteEl.textContent = quotes[index];
      index = (index + 1) % quotes.length;
    }, 5000);
  }
  
  // Scroll-to-top
  if (topBtn) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          topBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
          ticking = false;
        });
        ticking = true;
      }
    });
    
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // Smooth navigation
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
        ?.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();
