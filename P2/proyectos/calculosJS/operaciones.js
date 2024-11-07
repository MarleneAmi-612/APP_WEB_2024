function operacion(){
    let n1, n2, tipope, simbolo, result;
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    tipope=document.getElementById("calculador").value;
    

    if (isNumber(n1) && isNumber(n2))
    {
        switch (tipope)
    {
        case "Suma":ope=n1+n2; simbolo = '+'; break;
        case "Resta":ope=n1-n2; simbolo = '-';break;
        case "Division":ope=n1/n2; simbolo = '/';break;
        case "Multiplicacion":ope=n1*n2; simbolo = 'x';break;
       
    }


        result = document.getElementById('resultado').innerHTML=`<h2>${n1} ${simbolo} ${n2} = ${ope}</h2>`;  // Mostrar la operación completa
    }

    else{
        result = document.getElementById('resultado').innerHTML=`<h2></h2>`; //paque borre
        alert ("Ingrese solo números porfas")
    }
        
  
}
    

function isNumber(n)
{
    return !isNaN(parseInt(n) && isFinite(n))
}
// console.log( typeof verdadero) aqui aaaa;

