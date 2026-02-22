// Handles navbar opacity based on scroll behavior
export function setupNavbarScroll(navbarId = "navbar", delay = 300) {
  const navbar = document.getElementById(navbarId);
  if (!navbar) return;

  let timeoutId;

  window.addEventListener("scroll", () => {
    navbar.classList.remove("opacity-100");
    navbar.classList.add("opacity-70");

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      navbar.classList.remove("opacity-70");
      navbar.classList.add("opacity-100");
    }, delay);
  });
}
