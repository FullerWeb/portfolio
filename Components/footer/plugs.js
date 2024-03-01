const testimonials = document.querySelectorAll('.plug');
let currentTestimonialIndex = 0;

function showNextPlug() {
  console.log('Attemting to show plugs')
  testimonials.forEach(testimonial => {
    testimonial.classList.remove('visible');
  });
  testimonials[currentTestimonialIndex].classList.add('visible');
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
}

showNextshowNextPlug(); // Show the first testimonial immediately

setInterval(showNextshowNextPlug, 8000); // Change testimonial every 6 seconds