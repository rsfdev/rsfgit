let caixaUm = document.querySelector(".caixa1");
let caixaDois = document.querySelector(".caixa2");

function trocaCor() {
  caixaDois.style.backgroundColor = "cyan";
}

caixaUm.addEventListener('click', trocaCor);
