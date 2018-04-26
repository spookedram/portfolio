// When the user scrolls the page, execute stickNav
window.onscroll = function() { stickNav(); };

// Get the header
var header = document.getElementById("navigation");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNav() {
  if (window.pageYOffset >= sticky) {
    if(document.documentElement.clientWidth < 577) {
    header.classList.add("sticky");
    }
  } else {
    header.classList.remove("sticky");
  }
}