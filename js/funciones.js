//alert('Yony es gay');
console.log('Hola mundo');
var num = 10;   
var num2 = 20;
resultado = num+num2;
console.log(resultado);
var cadena = 'El resultado es:'
console.log(cadena+ num2);

cadena = 'Lorem \t ipsum dolor sit \"amet\" consectetur \n adipisicing elit.'
console.log(cadena);

semana = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
console.log(semana);

for(var i = 0;i<8;i++)
{
    console.log(semana[i]);
}
for(dia in semana)
{
    console.log(dia);
    console.log(semana[dia])
}