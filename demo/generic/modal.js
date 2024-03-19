// Function to open a modal
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
  modal.style.animation = "fadeIn 0.5s";
}

// Function to close a modal
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.animation = "fadeOut 0.5s";
  setTimeout(function () {
    modal.style.display = "none";
    modal.style.animation = ""; // Reset animation
  }, 500); // Wait for the fade out animation to complete
}

// Get all elements with class "openModalBtn"
var openModalBtns = document.getElementsByClassName("openModalBtn");

// Loop through each button and attach click event listener
for (var i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener("click", function () {
    var modalId = this.getAttribute("data-modal-target");
    openModal(modalId);
  });
}

// Get all elements with class "close"
var closeBtns = document.getElementsByClassName("close");

// Loop through each close button and attach click event listener
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener("click", function () {
    var modalId = this.parentElement.parentElement.id;
    closeModal(modalId);
  });
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    var modalId = event.target.id;
    closeModal(modalId);
  }
}
