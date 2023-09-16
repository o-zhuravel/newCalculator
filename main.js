document.addEventListener("keydown", filterKey);

function filterKey (e) {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (numbers.includes(e.key)) {
        addToDisplay(`${e.key}`);
    }
    else if (e.key === "=" || e.key === "Enter") {
        calculateResult();
    }
    else if (e.key === "Delete" || e.key === "C") {
        clearDisplay();
    }
    else if (e.key === "Backspace") {
        clearLastSymbol();
    }
}

class Calculator {
    constructor() {
        this.display = document.getElementById("display");
    }

    addToDisplay(value) {
        this.display.value += value;
    }

    clearDisplay() {
        this.display.value = "";
    }

    clearLastSymbol () {
        this.display.value = this.display.value.slice(0, -1);
    }

    calculateResult() {
        try {
            this.display.value = eval(this.display.value);
        } catch (error) {
            this.display.value = "Помилка";
        }
    }
}

const calculator = new Calculator();

function addToDisplay(value) {
    calculator.addToDisplay(value);
}

function clearDisplay() {
    calculator.clearDisplay();
}

function clearLastSymbol () {
    calculator.clearLastSymbol ();
}

function calculateResult() {
    calculator.calculateResult();
}