// Function to preload the correct background image based on the current screen size
export function preloadImages() {
  // Get the current screen size (this can be adjusted based on your Tailwind breakpoints)
  const screenSize = window.innerWidth;

  // Preload the appropriate image based on the current screen size
  let preloadUrl = "";

  if (screenSize >= 1536) {
    preloadUrl =
      "https://prehabilitationtherapycenter.hr//images/Nikola/prehab Nikolaxl.jpg"; // XL breakpoint
  } else if (screenSize >= 1280) {
    preloadUrl =
      "https://prehabilitationtherapycenter.hr//images/Nikola/prehab Nikolalg.jpg"; // LG breakpoint
  } else if (screenSize >= 1024) {
    preloadUrl =
      "https://prehabilitationtherapycenter.hr//images/Nikola/prehab Nikolamd.jpg"; // MD breakpoint
  } else if (screenSize >= 640) {
    preloadUrl =
      "https://prehabilitationtherapycenter.hr//images/Nikola/prehab Nikolasm.jpg"; // SM breakpoint
  } else {
    preloadUrl =
      "https://prehabilitationtherapycenter.hr//images/Nikola/prehab Nikolaxsm.jpg"; // XSM breakpoint
  }

  // Create a preload link element
  const preloadLink = document.createElement("link");
  preloadLink.rel = "preload";
  preloadLink.as = "image";
  preloadLink.href = preloadUrl;

  // Append the preload link to the head of the document
  if (!document.querySelector(`link[href="${preloadUrl}"]`)) {
    document.head.appendChild(preloadLink);
  }
}
