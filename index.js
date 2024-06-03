function showLab(labId) {
  var labs = document.querySelectorAll(".lab-content");
  labs.forEach(function (lab) {
    lab.style.display = "none";
  });

  var sections = document.querySelectorAll(".lab-content section");
  sections.forEach(function (section) {
    section.style.display = "none";
  });

  var sidebars = document.querySelectorAll(".sidebar");
  sidebars.forEach(function (sidebar) {
    sidebar.style.display = "none";
  });

  document.getElementById(labId).style.display = "block";
  document.getElementById(labId + "-sidebar").style.display = "block";
}

function showSection(sectionId) {
  var sections = document.querySelectorAll(".lab-content section");
  sections.forEach(function (section) {
    section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";
}

document.querySelectorAll(".sidebar a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var sectionId = this.getAttribute("href").substr(1);
    showSection(sectionId);
  });
});
