const white_screen = document.querySelector(".WhiteScreen");
console.log(white_screen);

document.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY <= 1100) {
    white_screen.style.opacity = window.scrollY / 300;
    if (white_screen.style.opacity > 0) {
      white_screen.style.display = "block";
    }
  } else if (window.scrollY > 1100 && window.scrollY < 100000) {
    if (white_screen.style.opacity != 0) {
      white_screen.style.opacity = 0;
      setTimeout(() => {
        white_screen.style.display = "none";
      }, 200);
    }
  }
});

// Activate once to prevent white screen on load
white_screen.style.opacity = window.scrollY / 500;
if (window.scrollY > 1300 && window.scrollY < 100000) {
  white_screen.style.opacity = 0;
}

function hideWhiteScreen() {}
