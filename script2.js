
let num1
let num2
let resultado

function somar(){
    num1 = Number(window.prompt("Digite aqui o primeiro número:"));
    num2 = Number(window.prompt("Digite o segundo número:"));

    resultado = num1 + num2;
    
    alert("O resultado é " + resultado + "");
}
function subtrair(){
    num1 = Number(window.prompt("Digite aqui o primeiro número:"));
    num2 = Number(window.prompt("Digite o segundo número:"));

    resultado = num1 - num2;

    alert("O resultado é " + resultado + "");
}
function multiplicar(){
    num1 = Number(window.prompt("Digite aqui o primeiro número:"));
    num2 = Number(window.prompt("Digite o segundo número:"));

    resultado = num1 * num2;
    alert("O resultado é " + resultado + "");
}
function dividir(){ 
    num1 = Number(window.prompt("Digite aqui o primeiro número:"));
    num2 = Number(window.prompt("Digite o segundo número:"));

    resultado = num1 / num2;

    alert("O resultado é " + resultado + "");
}

