
let primeiroFilhoDoFilho1 = document.createElement("p");
primeiroFilhoDoFilho1.innerHTML = "Testing primeiroFilhoDoFilho1";

console.log(
    document.querySelector(".column_right").parentNode
)

console.log(document.getElementById("stack"))

console.log(document.getElementById("elementoOndeVoceEsta"))
console.log(document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "red")
console.log(document.getElementById("pai").childNodes)
console.log(document.getElementById("pai").firstChild)
console.log(document.getElementById("pai").lastChild)
console.log(document.getElementById("primeiroFilhoDoFilho").nextSibling)
console.log(document.getElementById("segundoEUltimoFilhoDoFilho").previousSibling)
console.log(document.getElementById("segundoEUltimoFilhoDoFilho").nextElementSibling)
console.log(document.getElementById("terceiroEUltimoFilhoDoFilho").previousElementSibling)

console.log(document.querySelector("primeiroFilhoDoFilho").appendChild(primeiroFilhoDoFilho1)

//let color1 = document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "red";
//alert(color1) //appendChild

