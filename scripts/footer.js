var span = document.getElementById("current-year");
if (span) {
  var year = (new Date()).getFullYear().toString();
  span.innerHTML = year;
}