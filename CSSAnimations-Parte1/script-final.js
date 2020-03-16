window.onload = function () {
  function reset(car1, car2, car3) {
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
    car3.style.marginLeft = 0;
    car3.style.animation = "";
    clearInterval(car1.timer);
    clearInterval(car2.timer);
    clearInterval(car3.timer);
    button.disabled = false;
  }

  var button = document.querySelector("button");
  var car1 = document.querySelector('.car1');
  car1.style.marginLeft = 0;
  var car2 = document.querySelector('.car2');
  car2.style.marginLeft = 0;
  var car3 = document.querySelector('.car3');
  car2.style.marginLeft = 0;

  button.addEventListener("click", function (event) {
    button.disabled = true;

    car1.timer = setInterval(function () {
      car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 60 + 'px';
      if (parseInt(car1.style.marginLeft) > window.innerWidth) {
        alert("Carro 1 ganhou!");
        reset(car1, car2, car3);
      }
    }, 60)

    car2.timer = setInterval(function () {
      car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 60 + 'px';
      if (parseInt(car2.style.marginLeft) > window.innerWidth) {
        alert("Carro 2 ganhou!");
        reset(car1, car2, car3);
      }
    }, 60)

    car3.style.animation = "racing 3500ms ease-out"
    car3.style.animationFillMode = "forwards"
    car3.timer = setInterval(function () {
      if (parseInt(window.getComputedStyle(car3).marginLeft) > window.innerWidth) {
        alert("Carro 3 ganhou!");
        reset(car1, car2, car3);
      }
    }, 60)
  });
}
