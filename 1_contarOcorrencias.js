function contarOcorrencias(array) {
    let frequencia = {};
    for (let num of array) {
        if (frequencia[num]) {
            frequencia[num]++;
        } else {
            frequencia[num] = 1;
        }
    }
    return frequencia;
}

let array = [1, 2, 2, 3, 3, 3, 4];
console.log(contarOcorrencias(array));
