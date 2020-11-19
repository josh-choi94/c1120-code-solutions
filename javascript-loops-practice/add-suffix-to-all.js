/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var results = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    results.push(newWord);
  }
  return results;
}
