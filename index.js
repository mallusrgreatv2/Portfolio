import "./lib/jquery.js";
window.addEventListener("load", () => {
  document.querySelector("h1").classList.toggle("bigScale");
  document.querySelector("h1").classList.toggle("normalScale");
});
document
  .querySelector("[content-about]")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector("#about");
    const distance = target.getBoundingClientRect().top;
    window.scrollTo({
      top: distance,
      behavior: "smooth",
    });
  });
document
  .querySelector("[content-projects]")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector("#projects");
    const distance = target.getBoundingClientRect().top;
    window.scrollTo({
      top: distance,
      behavior: "smooth",
    });
  });
document
  .querySelector(".personal-info")
  .addEventListener("click", function (e) {
    const target = document.querySelector(".personal-info-content");
    const displayYesClass = "display-yes";
    if (!target.classList.contains(displayYesClass)) {
      const scrollTarget = target.lastElementChild;
      target.classList.toggle(displayYesClass);
      window.scrollTo({
        top: scrollTarget.getBoundingClientRect().bottom,
        behavior: "smooth",
      });
    } else {
      target.classList.toggle(displayYesClass);
      const about = document.querySelector("#about");
      const distance = about.getBoundingClientRect().bottom;
      window.scrollTo({
        top: distance,
        behavior: "smooth",
      });
    }
  });
document
  .querySelector(".frameworks-wrapper")
  .addEventListener("click", function (e) {
    const target = document.querySelector(".frameworks-content");
    const displayYesClass = "display-yes";
    if (!target.classList.contains(displayYesClass)) {
      const scrollTarget = target.lastElementChild;
      target.classList.toggle(displayYesClass);
      window.scrollTo({
        top: scrollTarget.getBoundingClientRect().bottom,
        behavior: "smooth",
      });
    } else {
      target.classList.toggle(displayYesClass);
      const about = document.querySelector("#about");
      const distance = about.getBoundingClientRect().bottom;
      window.scrollTo({
        top: distance,
        behavior: "smooth",
      });
    }
  });
document
  .querySelector(".contact-wrapper")
  .addEventListener("click", function (e) {
    const target = document.querySelector(".contact-content");
    const displayYesClass = "display-yes";
    if (!target.classList.contains(displayYesClass)) {
      const scrollTarget = target.lastElementChild;
      target.classList.toggle(displayYesClass);
      window.scrollTo({
        top: scrollTarget.getBoundingClientRect().bottom,
        behavior: "smooth",
      });
    } else {
      target.classList.toggle(displayYesClass);
      const about = document.querySelector("#about");
      const distance = about.getBoundingClientRect().bottom;
      window.scrollTo({
        top: distance,
        behavior: "smooth",
      });
    }
  });
