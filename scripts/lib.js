function $(selector, context) {
  var result = [];
  for (const match of ((context || document).querySelectorAll(selector) || [])) {
    result.push(match);
  }
  return result;
}

window.$ = $;