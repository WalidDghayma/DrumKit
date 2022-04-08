const length = document.querySelectorAll(".drum").length;
for (let i = 0; i < length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    playSound(this.innerHTML);
    makeAnimation(this.innerHTML);
  });
  document.addEventListener("keypress", function (event) {
    playSound(event.key);
    makeAnimation(event.key);
  });
}

function playSound(key) {
  var sound;
  switch (key) {
    case "w":
      sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "a":
      sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "s":
      sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "d":
      sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    case "j":
      sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case "k":
      sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "l":
      sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    default:
  }
}

function makeAnimation(currentSelector) {
  let currentButton = document.querySelector("." + currentSelector);
  currentButton.classList.add("pressed");
  currentButton.classList.add("white");
  setTimeout(function () {
    currentButton.classList.remove("white");
    currentButton.classList.remove("pressed");
  }, 150);
}
