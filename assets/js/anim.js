const sections = document.querySelectorAll("section");

var config = {
  threshold: 0.7,
};

let sectionObserver = new IntersectionObserver(sectionCheck, config);

function sectionCheck(entries) {
    entries.forEach(entry => {
        console.log(entry)
    })
}

sections.forEach((section) => {
  sectionObserver.observe(section);
});
