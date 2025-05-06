// Datos de entrada
// utilizando prompt

let edad = prompt('Ingrese su edad'); // Se ingresa 10
console.log(typeof edad);
document.writeln('Su edad en 10 años mas sera: ' + Number(edad) + 10); // Su edad en 10 años mas sera: 1010
document.writeln('Su edad en 10 años mas sera: ' + (Number(edad) + 10)); // Su edad en 10 años mas sera: 20

console.log(edad); // Tipo Sting
edad = Number(edad); // Lo convertimos a Number
console.log(typeof edad);

console.log('Lo muestra pero no incrementa', edad++); // 10, incrementa en 1
console.log(edad); // 11 

console.log('Lo muestra pero no incrementa', edad--); // 11, decrementa en 1
console.log(edad); // 10

console.log(edad *= 2); // 20, se multiplica por 2
resultado = edad * 10
console.log('El resultado de la operacion es', resultado) // 200
console.log(edad /= 10); // 2, se diviede por 10

const aceptar = confirm('Acepta ?');
