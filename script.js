window.onload = function() {
  document.querySelector('#deck').addEventListener('click', drawCard)
}

function getRandomCard() {
  const imagePaths = [
    "seis-de-copas.png",
    "tres-de-ouros.png",
    "quatro-de-paus.png",
    "sete-de-paus.png",
    "nove-de-espadas.png",
    "sete-de-espadas.png",
    "cinco-de-ouros.png",
  ]

  const numberOfCardImages = imagePaths.length
  const randomImageIndex = Math.floor(Math.random() * numberOfCardImages)

  return imagePaths[randomImageIndex]
}

function getRandomAnimation() {
  const numberOfAnimations = 2
  const randomAnimationIndex = Math.floor(Math.random() * numberOfAnimations)

  const animations = ['flip', 'jump']

  return animations[randomAnimationIndex]
}


function drawCard() {
  let card = document.createElement('img')
  card.src = getRandomCard()
  card.classList.add('card')
  card.classList.add(getRandomAnimation())

  document.querySelector('#grid').appendChild(card)
}
