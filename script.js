const display = document.getElementById('display');

function appendCharacter(character) {
    display.value += character;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        // Previne execução de código malicioso limitando os caracteres permitidos
        if (/[^0-9+\-*/.]/.test(display.value)) {
            throw new Error("Entrada inválida");
        }
        
        const result = new Function('return ' + display.value)();
        
        if (result === Infinity || isNaN(result)) {
            display.value = 'Erro: Div por 0';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Erro';
        setTimeout(clearDisplay, 1500);
    }
}