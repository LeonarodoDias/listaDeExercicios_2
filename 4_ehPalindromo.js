function ehPalindromo(texto) {
    let textoInvertido = texto.split('').reverse().join('');
    return texto === textoInvertido;
}

// Exemplo de uso:
let palavra = "radar";
console.log(ehPalindromo(palavra));
