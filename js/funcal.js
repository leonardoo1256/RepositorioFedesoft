



function suma()
{
    var num1 = document.getElementById("entrada").value;
    var num2 = document.getElementById("entrada2").value;
    var res = parseInt(num1)+parseInt(num2);
    var miresultado = document.getElementById("respuesta");
    miresultado.value = res;

}
function Resta()
{
    var num1 = document.getElementById("entrada").value;
    var num2 = document.getElementById("entrada2").value;
    var res = parseInt(num1)-parseInt(num2);
    var miresultado = document.getElementById("respuesta");
    miresultado.value = res;
}
function Multiplicacion()
{
    var num1 = document.getElementById("entrada").value;
    var num2 = document.getElementById("entrada2").value;
    var res = parseInt(num1)*parseInt(num2);
    var miresultado = document.getElementById("respuesta");
    miresultado.value = res;
}
function Division()
{
    var num1 = document.getElementById("entrada").value;
    var num2 = document.getElementById("entrada2").value;
    var res = parseInt(num1)/parseInt(num2);
    var miresultado = document.getElementById("respuesta");
    miresultado.value = res;
}