/* exported getStudentNames */
function getStudentNames(students) {
  var results = [];
  for (var i = 0; i < students.length; i++) {
    var currentStudent = students[i];
    results.push(currentStudent.name);
  }
  return results;
}
