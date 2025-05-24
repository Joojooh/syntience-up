// syntience-anim.js
document.addEventListener('DOMContentLoaded', function() {
  const crystal = document.querySelector('.syntience-symbol polygon');
  
  if (crystal) {
    crystal.addEventListener('mouseenter', function() {
      this.style.stroke = "#ffffff";
      this.style.strokeWidth = "3px";
      this.style.filter = "drop-shadow(0 0 8px #ffae00)";
    });

    crystal.addEventListener('mouseleave', function() {
      this.style.stroke = "#ffae00";
      this.style.strokeWidth = "2px";
      this.style.filter = "none";
    });
  }
});