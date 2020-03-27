const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map(numero => numero * 2));

const paresMenoresQueCinco = [];
numeros.forEach(num => {
  if(num < 5 && num % 2 === 0) {
    paresMenoresQueCinco.push(num);
  }
})
console.log(paresMenoresQueCinco);

console.log(numeros);
console.log(typeof numeros);
