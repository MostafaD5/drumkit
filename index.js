const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    animateButton(buttonInnerHTML);
  });
});

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  animateButton(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
    case "ص":
      new Audio("./sounds/tom-1.mp3").play();
      break;
    case "a":
    case "ش":
      new Audio("./sounds/tom-2.mp3").play();
      break;
    case "s":
    case "س":
      new Audio("./sounds/tom-3.mp3").play();
      break;
    case "d":
    case "ي":
      new Audio("./sounds/tom-4.mp3").play();
      break;
    case "j":
    case "ت":
      new Audio("./sounds/snare.mp3").play();
      break;
    case "k":
    case "ن":
      new Audio("./sounds/crash.mp3").play();
      break;
    case "l":
    case "م":
      new Audio("./sounds/kick-bass.mp3").play();
      break;
    default:
      console.log(`Unmapped key: ${key}`);
  }
}

function animateButton(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  if (!activeButton) return;

  activeButton.classList.add("active");
  setTimeout(() => {
    activeButton.classList.remove("active");
  }, 100);
}
