function enterApp() {
    const clickSound = document.getElementById("clickSound");
    clickSound.play();
  
    document.getElementById("cover").style.display = "none";
    document.getElementById("appContent").style.display = "flex";
  }
  
  // Wait for DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown-btn");
  
    dropdowns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const dropdown = this.nextElementSibling;
        const isOpen = dropdown.style.display === "flex";
        dropdown.style.display = isOpen ? "none" : "flex";
        this.innerHTML = isOpen
          ? this.innerHTML.replace("⯅", "⯆")
          : this.innerHTML.replace("⯆", "⯅");
      });
    });
  });
  
  