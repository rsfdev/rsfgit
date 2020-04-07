const myRemoveWithoutCopy = (arr, item) =>
  arr.forEach((element, index, array) =>
    element === item ? array.splice(index, 1) : undefined
  );

module.exports = myRemoveWithoutCopy;

// Slice ( )
// Copia elementos de um array;
// O retorna como um novo array;
// Não modifica o novo array;
// Começa dividindo de…até o índice informado: array.slice (de, ate);
// Ele não inclui o índice do parâmetro “ate” se você não o passar;
// Pode ser usado para arrays e strings.

// Splice ( )
// Usado para adicionar/remover elementos de um array;
// Retorna um array dos elementos adicionados/removidos;
// Muta o array;
// Par adicionar elementos: array.splice (índice, numero de elementos, novo elemento);
// Para remover elementos: array.splice (índice, número de elementos);
// Só pode ser usado em arrays.

// Split ( )
// Divide uma string em substrings;
// Retorna o valor em um array;
// Usa 2 parâmetros, ambos opcionais: string.split(separador, limite);
// Não modifica a string original;
// Só pode ser usado para strings.