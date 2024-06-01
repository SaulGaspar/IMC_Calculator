function calculateBMI() {
    var Peso = parseFloat(document.getElementById('Peso').value);
    var Altura = parseFloat(document.getElementById('Altura').value);

    var bmi = Peso / (Altura * Altura);
    var result = "Tu IMC es " + bmi.toFixed(2) + ". ";

    if (bmi < 18.5) {
        result += "Estás bajo peso.";
    } else if (bmi < 25) {
        result += "Tienes un peso saludable.";
    } else if (bmi < 30) {
        result += "Tienes sobrepeso.";
    } else {
        result += "Tienes obesidad.";
    }

    document.getElementById('result').innerHTML = result;
}
