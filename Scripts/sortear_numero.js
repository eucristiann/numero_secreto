const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()
const elementoMenorValor = document.querySelector('#menor-valor')
const elementoMaiorValor = document.querySelector('#maior-valor')


elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número secreto:', numeroSecreto)