var modal = document.getElementById("theModal");
var button = document.getElementById("open");
var noButton = document.getElementById("no").addEventListener("click", function (event) {
    modal.style.display = "none";
},

button.onclick = function (event) {
  modal.style.display = "block";

})