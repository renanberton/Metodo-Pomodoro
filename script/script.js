let tempoSegundos = document.getElementById('tempo');
let tempoMinutos = document.getElementById('minutos');
let btnFocar = document.querySelector('.foco');
let btnDescansar = document.querySelector('.descanso');

btnDescansar.classList.add('esconderBotao');

function pararRelogio(intervalo) {
    clearInterval(intervalo);
}

function foco() {    
    btnFocar.disabled = true;
    let segundos = 0;
    let minutos = 0;
    intervaloPomodoro = setInterval(() => {
        segundos ++;
        tempoSegundos.innerHTML = segundos;
        tempoMinutos.innerHTML = minutos;
        if (segundos >= 60) {
            segundos = 0;
            minutos += 1;
            if (minutos.length <= 1) {
                minutos += '0';
            }
            if(minutos >= 25) { 
                segundos = 0;
                minutos = 0;
                tempo.innerHTML = 0;
                tempoMinutos.innerHTML = 0;
                let som = document.getElementById('audiotag1').play();
                pararRelogio(intervaloPomodoro);
                btnFocar.classList.add('esconderBotao');
                btnDescansar.classList.remove('esconderBotao');
                btnFocar.disabled = false;
            }
        }
    }, 10);
};

function descanso() {    
    btnDescansar.disabled = true;
    let segundos = 0;
    let minutos = 0;
    intervaloPomodoro = setInterval(() => {
        segundos ++;
        tempoSegundos.innerHTML = segundos;
        tempoMinutos.innerHTML = minutos;
        if (segundos >= 60) {
            segundos = 0;
            minutos += 1;
            if(minutos >= 5) {
                segundos = 0;
                minutos = 0;
                tempo.innerHTML = 0;
                tempoMinutos.innerHTML = 0;
                let som = document.getElementById('audiotag1').play();
                pararRelogio(intervaloPomodoro);
                btnDescansar.classList.add('esconderBotao');
                btnFocar.classList.remove('esconderBotao');
                btnDescansar.disabled = false;
            }
        }
    }, 10);
};


