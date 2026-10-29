const navBtnOpen = document.getElementById("navBtnOpen");
const navBtnClose = document.getElementById("navBtnClose");
const nav = document.getElementById("nav");

function toggleNav() {
  nav.classList.toggle("active");
}

navBtnOpen.addEventListener("click", toggleNav);
navBtnClose.addEventListener("click", toggleNav);

// Cookie banner + demo contact form. Separate from index.js so your nav code stays untouched.
(() => {
  const banner = document.getElementById("cookie");
  const acceptBtn = document.getElementById("cookieAccept");

  let accepted = false;
  try {
    accepted = localStorage.getItem("cookieAccepted") === "1";
  } catch (err) {
    // Storage can be blocked; the banner simply shows every visit.
  }

  if (banner && !accepted) banner.hidden = false;

  if (banner && acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      banner.hidden = true;
      try {
        localStorage.setItem("cookieAccepted", "1");
      } catch (err) {
        // ignore
      }
    });
  }

  const form = document.getElementById("contactForm");
  const status = document.getElementById("contactStatus");

  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.textContent =
        "Thanks! Your message was received (demo form, nothing is sent).";
      form.reset();
    });
  }
})();
