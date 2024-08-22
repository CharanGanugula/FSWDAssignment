function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById("display").value += number;
}

function appendOperator(operator) {
    let display = document.getElementById("display").value;
    if (display !== "") {
        let lastChar = display[display.length - 1];
        if (!isNaN(lastChar)) {
            document.getElementById("display").value += operator;
        }
    }
}

function calculate() {
    let display = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(display);
    } catch {
        document.getElementById("display").value = "Error";
    }
}
