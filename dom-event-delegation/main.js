var task = document.querySelector(".task-list");

task.addEventListener("click", function (event) {
  console.log("event.target:", event.target);
  console.log("event.target.tagName:", event.target.tagName);

  var taskList = event.target.closest(".task-list-item");
  if (event.target === "button") {
    
    console.log("closest.task-list-item:", taskList);
  }

  taskList.remove("task-list-item");
});
