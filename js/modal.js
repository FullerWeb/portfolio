//JavaScript to handle modal functionality


// Function to open the modal and load content from specified URL
function openModal(url) {
  var modalContent = document.getElementById("modalContent");

  // Fetch content from the specified URL
  fetch(url)
    .then(response => response.text())
    .then(data => {
      modalContent.innerHTML = data; // Insert fetched content into modal
      document.getElementById("myModal").style.display = "block"; // Open the modal
    })
    .catch(error => console.error('Error fetching content:', error));
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Open the appropriate modal when a button is clicked
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("openModalBtn")) {
    var url = event.target.getAttribute("data-url");
    openModal(url);
  }
});

// Close modal when the close button (X) is clicked
document.getElementsByClassName("close")[0].addEventListener("click", function () {
  closeModal();
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
});