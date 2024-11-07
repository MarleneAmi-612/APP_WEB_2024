function operacion(){
    let n1, n2, tipope, result, pi, radio, imagen, figura;
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    tipope=document.getElementById("calculador").value;
    pi=3.14
    imagen = document.getElementById('figura')

    if (isNumber(n1) && isNumber(n2))
    {
        switch (tipope)
    {
        case "Rectangulo":ope=n1*n2; figura="img/Rectangulo.png"; break;
        case "Cuadrado":ope=n1*n2; ; figura= "img/Cuadrado.jpg"; break;
        case "Circulo":radio= n2/2; ope=(pi*radio)**2; figura="img/Circulo.png" ; break;
        case "Triangulo":ope=(n1*n2)/2; figura="img/Triangulo.png"; break;
       
    }
    

        result = document.getElementById('resultado').innerHTML=`<h2>${ope} u2</h2>`;  // Mostrar la operación completa
        imagen.setAttribute("src", figura)
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
// console.log( typeof verdadero) aqui;


let image = document.getElementById("triangulo.png");
image.setAttribute("src", "Triangulo.png")


let image2 =document.createElement("img");

nuevaImagen.textcontent="Triangulo.png"

let figura = document.getElementById("que")
figura.appendChild(nuevaImagen);