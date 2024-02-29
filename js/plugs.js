const testimonials = document.querySelectorAll('.plug');
let currentTestimonialIndex = 0;

function showNextTestimonial() {
  testimonials.forEach(testimonial => {
    testimonial.classList.remove('visible');
  });
  testimonials[currentTestimonialIndex].classList.add('visible');
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
}

showNextTestimonial(); // Show the first testimonial immediately

setInterval(showNextTestimonial, 8000); // Change testimonial every 6 seconds