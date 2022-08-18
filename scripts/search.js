/* globals $ */

// simple indexing search for homepage
var search = [];
var input = $(".search-input")[0];

// reset the input's value on reload
input.value = "";

// prevent reload of same page on search
$(".search-cards").forEach(function(card) {
  // cache searchable strings
  var title = card.children[0].textContent.trim().toLowerCase();
  var description = card.children[1].textContent.trim().toLowerCase();
  var tags = card.children[2].textContent.trim().toLowerCase();
  search.push({
    card: card,
    title: title,
    description: description,
    tags: tags
  });

  // prevent search cards from reloading the same location
  var current_href = location.pathname.replace(/\%20/g, " ");
  card.addEventListener("click", function(event) {
    event.preventDefault();
    var href = $("a.card-title", this)[0].getAttribute("href");
    if (href === current_href) {
      input.value = "";
      $("#modal-search .btn-close")[0].click();
    } else {
      window.location.href = href;
    }
  });
});

// search on keyup
input.addEventListener("keyup", function() {
  var value = this.value.trim().toLowerCase();
  search.forEach(function(options) {
    var card = options.card;
    var title = options.title;
    var description = options.description;
    var tags = options.tags;
    card.classList.remove("last-visible");
    // ignore if value is less than 2
    if (value.length < 2) {
      card.setAttribute("hidden", "true");
    // simple indexOf search on title, description and tags
    } else if (title.includes(value) || description.includes(value) || tags.includes(value)) {
      card.removeAttribute("hidden");
    // hide cards if the length of the search is greater than 2 but no match was found
    } else {
      card.setAttribute("hidden", "true");
    }
  });
  let list = $(".search-cards:not([hidden])");
  if (list.length > 0) {
    list[list.length - 1].classList.add("last-visible");
  }
});