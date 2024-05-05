document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  galleryItems.forEach(item => {
      item.addEventListener("click", function() {
          modal.style.display = "block";
          modalImage.src = this.src;
      });
  });

  // Close modal when the close button (x) is clicked
  const closeButton = document.querySelector(".close");
  closeButton.addEventListener("click", function() {
      modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});