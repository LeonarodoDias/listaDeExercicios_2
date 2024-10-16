function multiplicarMatrizes(matriz1, matriz2) {
    let resultado = [];
    if (matriz1[0].length !== matriz2.length) {
        return null; // Não é possível multiplicar
    }
    for (let i = 0; i < matriz1.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz2[0].length; j++) {
            let soma = 0;
            for (let k = 0; k < matriz1[0].length; k++) {
                soma += matriz1[i][k] * matriz2[k][j];
            }
            resultado[i][j] = soma;
        }
    }
    return resultado;
}

// Exemplo de uso:
let matriz1 = [
    [1, 2],
    [3, 4]
];
let matriz2 = [
    [5, 6],
    [7, 8]
];
console.log(multiplicarMatrizes(matriz1, matriz2));
