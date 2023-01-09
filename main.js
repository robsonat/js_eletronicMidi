//functions
function tocaSom (seletorAudio) {
    const element = document.querySelector(seletorAudio);  

    if (element && element.localName === 'audio') {
        element.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido.')
    }
}

//variables
const listaDeTeclas = document.querySelectorAll('.tecla');


for (let j = 0; j < listaDeTeclas.length; j++/*let j in listaDeTeclas*/) {

    const tecla = listaDeTeclas[j];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; 
    
    console.log(j);
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {

        console.log(event.code)

        if (event.code === 'Enter' || event.code === 'Space') {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}


