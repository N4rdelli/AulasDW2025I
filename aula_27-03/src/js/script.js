var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var resultado2 = document.getElementById('resultado2');

var btnSomar =  document.getElementById('somar');
var btnSubtrair =  document.getElementById('subtrair');
var btnDividir =  document.getElementById('dividir');
var btnMultiplicar =  document.getElementById('multiplicar');

btnSomar.addEventListener('click', function(){
    resultado2.innerText = "Resultado: " + (parseFloat(num1.value) + parseFloat(num2.value));
});

btnSubtrair.addEventListener('click', function(){
    resultado2.innerText = "Resultado: " + (parseFloat(num1.value) - parseFloat(num2.value));
});

btnDividir.addEventListener('click', function(){
    resultado2.innerText = "Resultado: " + (parseFloat(num1.value) / parseFloat(num2.value));
});

btnSubtrair.addEventListener('click', function(){
    resultado2.innerText = "Resultado: " + (parseFloat(num1.value) * parseFloat(num2.value));
});

// ---------------------------------------------------------

var calc = document.getElementById('calc');
var result = documento. getElementById ('result');
var clean = documento. getElementById ('clean');
var division = documento. getElementById ('division');
var multiplication = documento. getElementById ('multiplication');
var subtract = documento. getElementById ('subtract');
var add = documento. getElementById ('add');
var equal = documento. getElementById ('equal');
var n0 = documento. getElementById ('n0');
var n1 = documento. getElementById ('n1');
var n2 = documento. getElementById ('n2')
var n3 = documento. getElementById ('n3');
var n4 = documento. getElementById ('n4');
var n5 = documento. getElementById ('n5');
var n6 = documento. getElementById ('n6');
var n7 = documento. getElementById ('n7');
var n8 = documento. getElementById ('n8');
var n9 = documento. getElementById ('n9');

var numero1 = '';
var numero2 = '';
var operacao = null;

n0.addEventListener('click', function () {
    if (operacao == null){
        numero1 = numero1 + n0.textContext;
        calculo.innerText = numero1;
    }else{
        numero2 =  numero2 + n0.textContext;
        calc.innerText = numero1 + ' ' + operacao + ' ' + numero2;
    }
})

division.addEventListener('click', function() {
    operacao = division.textContext;
    calc.innerText = numero1 + ' ' + operacao + ' ' + numero2;
})

equal.addEventListener('click', function () {
    if (operacao == '/'){
        result.innerText = parseFloat(numero1) / parseFloat(numero2);
    }else if (operacao == ''){

    }
    // Outro else
    else{
        resultado2.innerText = 'ERRO';
    }
})