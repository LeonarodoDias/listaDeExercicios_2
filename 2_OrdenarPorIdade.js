function ordenarPorIdade(pessoas) {
    return pessoas.sort((a, b) => a.idade - b.idade);
}

let pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Carlos", idade: 19 },
    { nome: "Beatriz", idade: 32 }
];
console.log(ordenarPorIdade(pessoas));
