const track = document.querySelector('.carousel-track');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');
const scrollAmount = 500; // faster scroll

rightBtn.addEventListener('click', () => {
  if (track.scrollLeft + track.offsetWidth >= track.scrollWidth) {
    track.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
});

leftBtn.addEventListener('click', () => {
  if (track.scrollLeft <= 0) {
    track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
  } else {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
});

// Drag to scroll
let isDown = false, startX, scrollLeft;

track.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
  track.style.cursor = 'grabbing';
});

track.addEventListener('mouseleave', () => {
  isDown = false;
  track.style.cursor = 'grab';
});

track.addEventListener('mouseup', () => {
  isDown = false;
  track.style.cursor = 'grab';
});

track.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 2;
  track.scrollLeft = scrollLeft - walk;
});

// Touch support
let startTouchX = 0;
track.addEventListener('touchstart', (e) => {
  startTouchX = e.touches[0].clientX;
});

track.addEventListener('touchmove', (e) => {
  const deltaX = e.touches[0].clientX - startTouchX;
  track.scrollLeft -= deltaX;
  startTouchX = e.touches[0].clientX;
});
