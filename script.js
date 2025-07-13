// script.js

// 1. Variáveis de Estado do Timer
let timerInterval; // Variável para armazenar o ID do setInterval, permitindo pausar/limpar
let timeLeftInSeconds; // Tempo restante em segundos para o ciclo atual

// Configurações dos tempos dos ciclos (em segundos)
const POMODORO_DURATION = 25 * 60; // 25 minutos em segundos
const SHORT_BREAK_DURATION = 5 * 60; // 5 minutos em segundos
const LONG_BREAK_DURATION = 15 * 60; // 15 minutos em segundos (após 4 pomodoros)

let currentCycle = 1; // Contador de ciclos Pomodoro completados
const MAX_POMODORO_CYCLES = 4; // Número de pomodoros antes de uma pausa longa

let isRunning = false; // Indica se o timer está rodando (true) ou pausado (false)
let currentPhase = 'pomodoro'; // Pode ser 'pomodoro', 'short-break', 'long-break'

// 2. Pegar os elementos HTML que vamos manipular
const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-btn');
// ATENÇÃO AQUI: No seu HTML, o ID do botão pausar é 'pausar-btn', então use esse ID
const pauseButton = document.getElementById('pausar-btn');
const resetButton = document.getElementById('reset-btn');
const cycleCountDisplay = document.getElementById('cycle-count');
const statusDisplay = document.getElementById('status-display');

// 3. Funções de Utilidade e Inicialização

// Função inicial para configurar o timer quando a página carregar
function initializeTimer() {
    // Define o tempo inicial com base na fase atual
    if (currentPhase === 'pomodoro') {
        timeLeftInSeconds = POMODORO_DURATION;
        updateStatus('Foco');
    } else if (currentPhase === 'short-break') {
        timeLeftInSeconds = SHORT_BREAK_DURATION;
        updateStatus('Pausa Curta');
    } else if (currentPhase === 'long-break') {
        timeLeftInSeconds = LONG_BREAK_DURATION;
        updateStatus('Pausa Longa');
    }
    updateDisplay(); // Atualiza o display para mostrar o tempo inicial
    updateCycleDisplay(); // Atualiza o contador de ciclos
}

// Função para atualizar o display de tempo na interface
function updateDisplay() {
    const minutes = Math.floor(timeLeftInSeconds / 60);
    const seconds = timeLeftInSeconds % 60;
    // Formata para ter sempre dois dígitos (ex: 05:00, 10:07)
    timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Função para atualizar o status (Foco, Pausa Curta, etc.)
function updateStatus(statusText) {
    statusDisplay.textContent = statusText;
}

// Função para atualizar o contador de ciclos
function updateCycleDisplay() {
    cycleCountDisplay.textContent = currentCycle;
}

// 4. Funções de Controle do Timer (Iniciar, Pausar, Resetar)

function startTimer() {
    if (isRunning) { // Evita iniciar múltiplos timers
        return;
    }
    isRunning = true; // Define que o timer está rodando

    // A cada segundo, decrementa o tempo e atualiza o display
    timerInterval = setInterval(() => {
        timeLeftInSeconds--;
        updateDisplay();

        if (timeLeftInSeconds <= 0) {
            clearInterval(timerInterval); // Para o timer quando o tempo chega a zero
            isRunning = false; // Define que o timer não está mais rodando
            playAlarmSound(); // Toca um som de alarme
            moveToNextPhase(); // Move para a próxima fase (pausa ou novo pomodoro)
        }
    }, 1000); // 1000 milissegundos = 1 segundo
}

function pauseTimer() {
    clearInterval(timerInterval); // Para o setInterval
    isRunning = false; // Define que o timer está pausado
}

function resetTimer() {
    clearInterval(timerInterval); // Para qualquer timer rodando
    isRunning = false; // Define que o timer não está rodando
    currentCycle = 1; // Reseta o contador de ciclos
    currentPhase = 'pomodoro'; // Volta para a fase de Pomodoro
    initializeTimer(); // Re-inicializa o timer para o estado inicial
}

// 5. Lógica de Ciclos e Fases

function moveToNextPhase() {
    if (currentPhase === 'pomodoro') {
        currentCycle++; // Incrementa o ciclo de pomodoros
        if (currentCycle > MAX_POMODORO_CYCLES) {
            currentPhase = 'long-break';
            currentCycle = 1; // Reseta o contador de ciclo após a pausa longa
        } else {
            currentPhase = 'short-break';
        }
    } else { // Se estava em pausa curta ou longa, volta para pomodoro
        currentPhase = 'pomodoro';
    }
    initializeTimer(); // Inicializa o timer para a nova fase
    startTimer(); // Inicia o timer para a nova fase automaticamente
}

// 6. Alarme Sonoro (Opcional, mas útil!)
// Você pode adicionar um elemento <audio> no seu HTML e referenciá-lo aqui
// Ex: <audio id="alarm-sound" src="alarm.mp3" preload="auto"></audio>
const alarmSound = new Audio('alarm.mp3'); // Certifique-se de ter um arquivo 'alarm.mp3' na mesma pasta

function playAlarmSound() {
    alarmSound.play();
}


// 7. Conectar as Funções aos Botões (Event Listeners)
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Inicializa o timer quando o script é carregado pela primeira vez
initializeTimer();