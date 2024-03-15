// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Function to show testimonials
  function showPlugs() {
    const testimonials = document.querySelectorAll('.plug');
    let currentTestimonialIndex = 0;

    function showNextPlug() {
      testimonials.forEach(testimonial => {
        testimonial.classList.remove('visible');
      });
      testimonials[currentTestimonialIndex].classList.add('visible');
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    }

    showNextPlug(); // Show the first testimonial immediately
    setInterval(showNextPlug, 8000); // Change testimonial every 8 seconds
  }

  // Call showPlugs function after the DOM has loaded
  showPlugs();
});
