// Wait for DOM content to load so we don't get null error.
document.addEventListener("DOMContentLoaded", () => {
  // Get reference to image and audio.
  const mylogo = document.getElementById("mylogo");
  const fart = document.getElementById("fart");

  // Add click event.
  mylogo.addEventListener("click", (event) => {
    event.stopPropagation();

    // Check if audio is playing; if so, pause and reset to beginning.
    if (!fart.paused) {
      fart.pause();
      fart.currentTime = 0;
    }

    // Play fart.
    fart.play();
  });
});
