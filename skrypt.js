function calculate() {
    var pierwszaLiczba = parseFloat(document.getElementById("pierwszaLiczba").value);
    var operator = document.getElementById("operator").value;
    var drugaLiczba = parseFloat(document.getElementById("drugaLiczba").value);

    if (isNaN(pierwszaLiczba) || isNaN(drugaLiczba)) {
        alert("Podaj poprawne liczby.");
        return;
    }

    var result;
    switch (operator) {
        case "+":
            result = pierwszaLiczba + drugaLiczba;
            break;
        case "-":
            result = pierwszaLiczba - drugaLiczba;
            break;
        case "*":
            result = pierwszaLiczba * drugaLiczba;
            break;
        case "/":
            if (drugaLiczba === 0) {
                alert("Nie można dzielić przez zero.");
                return;
            }
            result = pierwszaLiczba / drugaLiczba;
            break;
        case "^":
            result = Math.pow(pierwszaLiczba, drugaLiczba);
            break;
        default:
            alert("Wybierz poprawny operator.");
            return;
    }

    document.getElementById("wynik").textContent = "Wynik: " + result;
}