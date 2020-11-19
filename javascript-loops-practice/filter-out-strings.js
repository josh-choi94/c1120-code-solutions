/* exported filterOutStrings */
function filterOutStrings(values) {
  var results = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== "string") {
      results.push(values[i]);
    }
  }
  return results;
}
