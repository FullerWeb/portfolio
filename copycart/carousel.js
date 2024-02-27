document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const progressDots = document.querySelector('.progress-dots');

  let currentIndex = 0;
  const totalItems = carouselItems.length;

  // Clone the first carousel item and append it to the end
  const firstClone = carouselItems[0].cloneNode(true);
  carousel.appendChild(firstClone);

  function updateProgressDots() {
    progressDots.innerHTML = '';
    for (let i = 0; i < totalItems; i++) {
      const dot = document.createElement('span');
      dot.classList.add('progress-dot');
      if (i === currentIndex % totalItems) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', function () {
        goToItem(i);
      });
      progressDots.appendChild(dot);
    }
  }

  function goToItem(index) {
    currentIndex = index;
    const translateValue = -index * 100;
    carousel.style.transform = `translateX(${translateValue}%)`;
    updateProgressDots();
  }

  function nextItem() {
    currentIndex++;
    const translateValue = -currentIndex * 100;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(${translateValue}%)`;

    // Reset currentIndex to 0 when reaching the last cloned item
    if (currentIndex >= totalItems) {
      currentIndex = 0;
      setTimeout(() => {
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(0%)`;
      }, 500);
    }

    updateProgressDots();
  }

  // Set up automatic sliding
  setInterval(nextItem, 5000);

  updateProgressDots();
});