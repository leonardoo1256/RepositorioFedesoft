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

function suma()
{
    n1 = 2;
    n2 = 3;
    res = n1+n2;
    console.log("la suma es:"+res);
}
suma()

var cad = 'En un lugar de la Mancha de cuyo nombre no quiero acordarme...'
var letras = cad.split('');
var resul = '';
for(i in letras)
{
    if(letras[i]=='a')
    {
        break;
    }    
    else
    {
        resul += letras[i];
    }
}
alert(resul);

var parrafos = document.getElementsByTagName("p");
console.log(parrafos);
parrafos[1].innerText ="Nuevo texto"

var mimensaje = document.getElementById("mensaje");
mimensaje.style.background = "gray";
console.log(mimensaje);

function refrescarvalor()
{
    var entrada = document.getElementById("entrada");
    mimensaje.innerHTML = entrada.value;
}
