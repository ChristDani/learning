porcentaje = 15;
pdolar = 3.8;
cantidad = 1288;
meses = 6;
a = 1;
ganancia = 0;
porcentajetotal = 0;
console.log('\nel saldo inicial es de: $' + cantidad.toFixed(2) + ' o S/' + cantidad*pdolar.toFixed(2) + '\n');

while (a <= meses) 
{
    porcentajeganado = (cantidad * (porcentaje/100))/12;
    console.log('el porcentaje ganado en el mes ' + a + ' es de: $' + porcentajeganado.toFixed(2) + ' o S/' + (porcentajeganado*pdolar).toFixed(2));
    cantidad += porcentajeganado
    console.log('el saldo acumulado en el mes ' + a + ' es de: $' + cantidad.toFixed(2) + ' o S/' + (cantidad*pdolar).toFixed(2) + '\n');
    // suma = cantidad + ((cantidad * (porcentaje/100))/12)
    porcentajetotal += porcentajeganado;
    // ganancia = cantidad + porcentajeganado
    a += 1;
}

console.log('\nel porcentaje total es de: $' + porcentajetotal.toFixed(2) + ' o S/' + (porcentajetotal*pdolar).toFixed(2));
console.log('el saldo final es de: $' + cantidad.toFixed(2) + ' o S/' + (cantidad*pdolar).toFixed(2) + '\n');