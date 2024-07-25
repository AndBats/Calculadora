/* 
Sumatoria OK

var numeroUno = parseFloat(prompt('Numero1'));
var numeroDos = parseFloat(prompt('Numero2'));
let sumar = numeroUno + numeroDos
console.log(`la suma de ${numeroUno} más ${numeroDos} es igual a ${sumar}`);
 */

/* Calculadora 1.0 */

/* var n1 = parseFloat(prompt('1er número'));
var ope = (prompt('operador + - * / '));
var n2 = parseFloat(prompt('2do Número'));

let total;

if (ope == '+'){
    total = n1 + n2
    console.log(`${n1} ${ope} ${n2} = ${total}`) 
}else if (ope == '-'){
    total = n1 - n2
    console.log(`${n1} ${ope} ${n2} = ${total}`) 
}else if (ope == '*'){
    total = n1 * n2
    console.log(`${n1} ${ope} ${n2} = ${total}`) 
}else if (ope == '/'){
    total = n1 / n2
    console.log(`${n1} ${ope} ${n2} = ${total}`) 
}else{
    alert("Operación no valida")
}
 */

/* calculadora 2.0 */

var n1 = parseFloat(prompt('1er número'));
var ope = (prompt('operador + - * / '));
var n2 = parseFloat(prompt('2do Número'));

function result(n1, ope, n2) {
    console.log(`${n1} ${ope} ${n2} = ${total}`) 
}
let total;

if (ope == '+'){
    total = n1 + n2
    result(n1, ope, n2)
}else if (ope == '-'){
    total = n1 - n2
    result(n1, ope, n2)
}else if (ope == '*'){
    total = n1 * n2
    result(n1, ope, n2)
}else if (ope == '/'){
    total = n1 / n2
    result(n1, ope, n2)
}else{
    alert("Operación no valida")
}

/* var suma = n1 + n2;
var rest = n1 - n2;
var mult = n1 * n2;
var divi = n1 / n2;
 */
/* if (ope === '+'){
    suma{
        console.log(`${suma}`)
    }
}
else (ope === '-'){
    resta{
        console.log(`${resta}`)
    }
} */
/* 
function suma(n1, n2){
    n1 ope n2
}
console.log(`${n1} ${ope} ${n2} = ${suma}`); */