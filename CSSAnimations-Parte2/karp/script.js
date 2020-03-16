const magikarp = document.querySelector('.karp');
const set = document.getElementById("set");
const pause = document.getElementById("pause");
const start = document.getElementById("start");


function setAnimations() {
  magikarp.style.animationName = "splash";
  magikarp.style.animationDuration = "1s";
  magikarp.style.animationTimingFunction = "linear";
  magikarp.style.animationDelay = "2s";
  magikarp.style.animationIterationCount = "infinite";
  magikarp.style.animationDirection = "reverse";
  magikarp.style.animationFillMode = "forwards";
}

function stopMagikarp() {
  magikarp.style.animationPlayState = "paused";
}
function startMagikarp() {
  magikarp.style.animationPlayState = "running";
}

set.addEventListener('click', function() {
  setAnimations();
})
pause.addEventListener('click', function() {
  stopMagikarp();
})
start.addEventListener('click', function() {
  startMagikarp();
})