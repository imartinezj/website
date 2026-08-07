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

  // Move News items older than 6 months into the (Old news) dropdown.
  // Runs on every page load, so this stays correct as time passes —
  // no manual "housekeeping pass" needed just to archive old items.
  (function archiveOldNews() {
    var newsList = document.getElementById("news-list");
    var oldNewsList = document.getElementById("old-news-list");
    var oldNewsSection = document.getElementById("old-news-section");
    if (!newsList || !oldNewsList) return;

    var months = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
    // Approximate mid-season month, for entries dated e.g. "Fall 2025" instead of "Mon YYYY".
    var seasons = { spring: 3, summer: 6, fall: 9, autumn: 9, winter: 0 };

    function parseNewsDate(text) {
      var parts = text.trim().split(/\s+/);
      if (parts.length !== 2) return null;
      var word = parts[0].toLowerCase();
      var year = parseInt(parts[1], 10);
      if (isNaN(year)) return null;
      if (months.hasOwnProperty(word.slice(0, 3))) return new Date(year, months[word.slice(0, 3)], 1);
      if (seasons.hasOwnProperty(word)) return new Date(year, seasons[word], 1);
      return null;
    }

    function monthsBetween(from, to) {
      return (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
    }

    var now = new Date();

    Array.prototype.slice.call(newsList.children).forEach(function (li) {
      var dateEl = li.querySelector(".news-date");
      if (!dateEl) return;
      var itemDate = parseNewsDate(dateEl.textContent);
      if (itemDate && monthsBetween(itemDate, now) >= 6) {
        oldNewsList.appendChild(li);
      }
    });

    if (oldNewsSection && oldNewsList.children.length === 0) {
      oldNewsSection.style.display = "none";
    }
  })();
});
