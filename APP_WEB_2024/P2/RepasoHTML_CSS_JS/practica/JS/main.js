//Este es un comentario de una linea

/* 
Este es un comentario de varias lineas
*/

//alerta
//alert("Soy una alerta")

//variables
var nombre="Amelia la cacahuatera";
let nombre2="Rodolfo el Reno";
let edad = 20
let estatura = 1.10;
let verdadero = true;


//contatenar valores
console.log("Hola tengo" + edad + "años")

//mostrar en pantalla el mismo mensaje
document.writer("Hola estoy en la pantalla <br>")
document.writer(" <h2> Hola piolina, tengo" + edad +"años </h2>");


// otra forma para mostrar en pantalla
let datos = document.getElementById("informacion")

datos.innerHTML="Hola este es el contenido de inner html";
datos.innerHTML+=" <hr><h3>Hola este es el contenido de inner html </h3>";



datos.innerHTML+=" <hr><h3> Hola piolina, tengo" + edad +"años  </h3>";

datos.innerHTML+=`
            <br>
            <hr>
            <h1>
                hola soy un contenido inner hTML mi nombre es: ${nombre}
                y mi estatura es: ${estatura}
            <h1/>`;



//condicionales

if (edad>=18)
    datos.innerHTML*=`
            <hr>
            soy mayor de edad
            <hr>`

else 
datos.innerHTML+=`<hr> soy menor de edad <hr>`


//ciclos
for(let i=1;i<=5;i++)
{
    datos.innerHTML+=`<hr> <h3> El numero es ${i}</hr>`
}


let i=1;
while (i<=5)
{
    datos.innerHTML+=`<hr><h3> El numero es ${i}</h3>`;
    i++; 
}



i=1;
do 
{
    datos.innerHTML+=`<hr><h3> El numero es ${i}</h3>`;
    i++;  
}
while (i<=5);


//funciones
//1- Funcion que no recibe parametros y no recibe valor
function suma1()
{
    let n1 =2;
    let n2 =3;
    var suma = n1 + n2;
    datos.innerHTML=`<hr><h3>El resultado de la suma1 es: ${suma}</h3>`;
}

suma1()

//2- Funcion que no recibe parametros y regresa valor
function suma2()
{
    let n1 =2;
    let n2 =3;
    let suma = n1 + n2;
    return suma;
   
}

let sum=suma2();
suma2();
datos.innerHTML=`<hr><h3>El resultado de la suma2 es: ${sum}</h3>`;

//3- Funcion  que recibe oaramnetris y no regresa valor
function suma3(numero1, numero2)
{
    let n1 =numero1;
    let n2 = numero2;
    let suma = n1 + n2;
    datos.innerHTML+=`<hr><h3>El resultado de la suma3 es: ${sum}</h3>`;
   
}

suma3(23,45); //ahora está recibiendo valores


//4- Funcion que recibe parametros y regresa valor
function suma4(numero1, numero2)
{
    let n1 =numero1;
    let n2 = numero2;
    let suma = n1 + n2;
    return suma;
}

sum=suma4(4,4)
datos.innerHTML+=`<hr><h3>El resultado de la suma4 es: ${sum}</h3>`;



//Arreglos

let animales=[];
animales[0]="Perro";
animales[1]="gato";
animaes[2]="Ave";

let animales2=["Tigre", "Leon", "Elefante"];

// for(let i=0;<animales2.length;i++)
// {
//     datos.innerHTML+=`<hr><h3>El animal es: ${i}</h3>`;
// }
   

//otra manera

animales2.forEach(element =>{
    datos.innerHTML+=`<hr><h3>El animal es: ${element}</h3>`;   
});

