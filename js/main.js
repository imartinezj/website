document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Allow tap-to-open dropdowns on touch devices
  document.querySelectorAll(".has-dropdown > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var parent = link.parentElement;
      var isTouch = window.matchMedia("(hover: none)").matches;
      if (isTouch && !parent.classList.contains("open")) {
        e.preventDefault();
        document.querySelectorAll(".has-dropdown.open").forEach(function (el) {
          el.classList.remove("open");
        });
        parent.classList.add("open");
      }
    });
  });
});
