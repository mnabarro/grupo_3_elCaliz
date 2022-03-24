function mas() {
    valor = document.getElementById("quantity");
    if (valor.value < 30) valor.value++;
}
function menos() {
    valor = document.getElementById("quantity");
    if (valor.value > 01) valor.value--;
}