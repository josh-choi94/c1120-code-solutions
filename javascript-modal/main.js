var modal = document.getElementById("theModal");
var button = document.getElementById("open");
var noButton = document.getElementById("no");

button.onclick = function (event) {
  modal.style.display = "block";

  noButton.addEventListener("click", function (event) {
    modal.style.display = "none";
  });
};
