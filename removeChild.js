
console.log(
    document.createElement("div")
    )

let img = document.createElement("img");
img.src="https://uploads-ssl.webflow.com/5dbd9ce75ad64f24b67f0932/5dc9da3b77a0be3df8dbce7b_students-trybe.png";

let p = document.createElement("p");
p.innerHTML = "Hello!"

console.log(
    img, p
    )

let p1 = document.createElement("p").innerHTML = "Hello!";
console.log(p1);

let civic = document.createElement("p");
civic.innerHTML = "civic";

let corolla = document.createElement("p");
corolla.innerHTML = "corolla";

document.getElementById("models").appendChild(civic);
document.getElementById("models").appendChild(corolla);

document.getElementById("models").removeChild(civic);

let quartoEUltimoFilhoDoFilho1 = document.createElement("div");
quartoEUltimoFilhoDoFilho1.innerHTML = "quartoEUltimoFilhoDoFilho";

let quartoEUltimoFilhoDoFilho2 = document.createElement("p");
quartoEUltimoFilhoDoFilho2.innerHTML = "quartoEUltimoFilhoDoFilho";

document.getElementById("elementoOndeVoceEsta").appendChild(quartoEUltimoFilhoDoFilho1);

document.getElementById("elementoOndeVoceEsta").parentNode.appendChild(quartoEUltimoFilhoDoFilho2);


