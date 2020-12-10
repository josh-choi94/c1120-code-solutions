var text = document.querySelector("h1");

function timeout() {
  text.textContent = "Hello There!";
}
setTimeout(timeout, 1200);
