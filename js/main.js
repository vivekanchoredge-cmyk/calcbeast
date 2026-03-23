// ✅ FIX: Load saved theme on every page
// Now uses both documentElement (html tag) AND body for compatibility
document.addEventListener("DOMContentLoaded", function () {

  let savedTheme = localStorage.getItem("theme");

  // Apply dark class to both html and body
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark");
  }

  let toggle = document.getElementById("themeToggle");

  if (toggle) {

    toggle.onclick = function () {

      // Toggle on both html and body
      document.documentElement.classList.toggle("dark");
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }

    };

  }

});