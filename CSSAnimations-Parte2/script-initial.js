let transforms = ["rotate", "translate-up", "translate-down",
                  "scale-up", "scale-down", "skew-up", "skew-down"];

const ANIMATION_TIME = 1000;
const TRANSFORM_INTERVAL = 2500;
const BASE_RACING_TIME = 30;

function getRandomTransform() {
  const transformIndex = Math.floor(Math.random() * transforms.length);
  return transforms[transformIndex];
}

function reset(cars, button) {
  for(let car of cars) {
    car.style.marginLeft = 0;
    car.style.animation = "";
    clearInterval(car.transformTimer);
    for (let transform of transforms) {
      if (car.classList.contains(transform)) {
        car.classList.remove(transform);
        break;
      }
    }
  }
  button.disabled = false;
}

window.onload = function () {
  var button = document.querySelector("button");

  var cars = document.querySelectorAll(".car");

  for (let i=0; i < cars.length; i++) {
    cars[i].style.marginLeft = "0";
    cars[i].number = i + 1;
  }

  button.addEventListener("click", function (event) {
    button.disabled = true;

    for (let car of cars) {
      car.transformTimer = setInterval(function() {
        var transform = getRandomTransform();
        car.classList.add(transform);
        setTimeout(function() {
          car.classList.remove(transform);
        }, ANIMATION_TIME);
      }, TRANSFORM_INTERVAL);
    }

    for (let car of cars) {
      let timeAddition = Math.floor(Math.random() * 5);
      car.style.animation = "racing " + (BASE_RACING_TIME + timeAddition) + "s ease-out";
      car.style.animationFillMode = "forwards";
      car.timer = setInterval(function () {
        car.style.marginLeft = parseInt(car.style.marginLeft) + Math.random() * 60 + "px";
        if (parseInt(window.getComputedStyle(car).marginLeft) > window.innerWidth) {
          alert("Carro " + car.number + " ganhou!");
          reset(cars, button);
        }
      }, 60);
      
    }
  });
}
