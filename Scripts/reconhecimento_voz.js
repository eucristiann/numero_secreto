window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const elementoChute = document.querySelector('#chute')

const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(evento) {
    chute = evento.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())