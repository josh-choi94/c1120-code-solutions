var task = document.querySelector(".task-list");

task.addEventListener("click", function (event) {
  console.log("event.target:", event.target);
  console.log("event.target.tagName:", event.target.tagName);

  if (event.target === "button") {
    return;
  }

  var taskList = event.target.closest(".task-list-item");

  console.log(taskList);

  taskList.remove("task-list-item");
});
