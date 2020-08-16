let button = document.querySelector(".share-button");
let bubble = document.querySelector(".bubble");

button.addEventListener("click", showshare);
document.body.addEventListener("click", () => {
  button.classList.remove("share-button-clicked");
  bubble.style.display = "none";
});

function showshare(event) {
  event.stopPropagation();
  if (button.classList.contains("share-button-clicked")) {
    button.classList.remove("share-button-clicked");
    bubble.style.display = "none";
  } else {
    button.classList.add("share-button-clicked");
    bubble.style.display = "block";
  }
}
