
  const cards = document.querySelectorAll('.project-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe each card
  cards.forEach(card => {
    observer.observe(card);

    // For cards already visible on load
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      card.classList.add('visible');
    }
  });



