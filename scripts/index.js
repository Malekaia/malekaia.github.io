/* globals $, Masonry */

// select random article on button click
var links = $(".card-title");
$(".random-article-button")[0].addEventListener("click", function() {
  links[Math.floor(Math.random() * links.length)].click();
});

// fix masonry grids onload
var masonry = new Masonry("#masonry-grid");
var masonry_layout = function() { masonry.layout(); };
masonry_layout();
document.addEventListener("DOMContentLoaded", masonry_layout);
window.addEventListener("load", masonry_layout);
window.addEventListener("resize", masonry_layout);

// add images to article cards (improve page load times)
document.addEventListener("DOMContentLoaded", function() {
  $("[data-background]").forEach(function(element) {
    element.style["background-image"] = "url(" + element.getAttribute("data-background") + ")";
  })
});
