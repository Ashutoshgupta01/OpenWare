document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".js-btn");
  const sections = document.querySelectorAll(".doc-section");

  let currentSection = document.querySelector(".doc-section.active");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;
      const nextSection = document.getElementById(targetId);

      if (nextSection === currentSection) return;

      // update nav
      tabs.forEach(t => t.classList.remove("selected"));
      tab.classList.add("selected");

      // fade out current
      currentSection.classList.remove("fade-in");

      setTimeout(() => {
        currentSection.classList.remove("active");

        // show next
        nextSection.classList.add("active");

        // force reflow so transition works
        void nextSection.offsetWidth;

        nextSection.classList.add("fade-in");

        currentSection = nextSection;
      }, 200); // must match CSS transition duration
    });
  });

  // initial fade-in
  if (currentSection) {
    currentSection.classList.add("fade-in");
  }
});