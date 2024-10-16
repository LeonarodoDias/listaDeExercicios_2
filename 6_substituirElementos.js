function substituirElemento(array, valorAntigo, valorNovo) {
    return array.map(item => item === valorAntigo ? valorNovo : item);
}

// Exemplo de uso:
let arrayExemplo = [1, 2, 2, 3, 4];
console.log(substituirElemento(arrayExemplo, 2, 5));
