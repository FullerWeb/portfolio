// Function to handle opening and closing the modal
function getModal() {

  // Get the modal
  var modal = document.getElementById('contactModal');

  // Get the button that opens the modal
  var connectBtn = document.getElementById("connect-button");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  connectBtn.onclick = function () {
    modal.style.display = "flex";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Form submission handling
  document.getElementById("contactForm").onsubmit = function (event) {
    event.preventDefault(); // Prevent form submission
  
    modal.style.display = "none";
  };
}

/* //Event Listener for connect button
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('connect-button').addEventListener('click', function (event) {
    console.log('Connect button clicked');
    getModal();
  });
});

// After DOMContentLoaded, attach the event listener for the connect button

// Close modal when user clicks on close button (×)
document.addEventListener('click', function (event) {
  if (event.target.className === 'close') {
    document.getElementById('contactModal').style.display = 'none';
  }
}); */
document.addEventListener('DOMContentLoaded',  () => {
  const openModalBtn = document.getElementById('openContactModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalContainer = document.getElementById('contactModalContainer');
  
  openModalBtn.addEventListener('click', () => {
    modalContainer.classList.add('modal-open');
    modalContainer.style.right = '0'; // Ease in from right
  });
  
  closeModalBtn.addEventListener('click', () => {
    modalContainer.classList.remove('modal-open');
    modalContainer.style.right = '-100%'; // Move back off-canvas
  });
});
