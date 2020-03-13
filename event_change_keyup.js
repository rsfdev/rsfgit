let inputTexto = document.querySelector("#input-texto");
let divQuadrado = document.querySelector(".quadrado");

function corQuadrado() {
  divQuadrado.style.backgroundColor = inputTexto.value;
}

inputTexto.addEventListener("keyup", corQuadrado);
