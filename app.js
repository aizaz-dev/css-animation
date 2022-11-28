const magEl = document.querySelector(".magnifier");
const conEl = document.querySelector(".search-bar-container");

magEl.addEventListener("click", function () {
  conEl.classList.toggle("active");
});
