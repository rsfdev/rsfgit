// https://www.codewars.com/kata/5b5e0ef007a26632c400002a
function elementsSum(arr, d){
  let index = arr.length;
  return arr.map(subArr => {
    index--;
    if (typeof subArr[index] === 'number') return subArr[index];
    return (d || 0);
  }).reduce(
    (accumulator, number) => accumulator + number
  );
}