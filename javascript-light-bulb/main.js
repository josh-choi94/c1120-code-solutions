var isLightOn = true;
document.querySelector("button").addEventListener("click", function (event) {
  var container = document.getElementById("container");
  if (isLightOn) {
    container.classList.remove("off");
    isLightOn = false;
  } else {
    container.classList.add("off");
    isLightOn = true;
  }
});