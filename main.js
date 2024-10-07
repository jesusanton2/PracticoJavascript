//Ejercicio 1
/*
let a = 5
let b = 10

let c = a + b

console.log(c)


let nombre = prompt("Cual es tu nombre?")

console.log("Hola,  " + nombre)
*/
//Ejercicio2
/*
let d = prompt("Ingrese el primer Numero :")
let e = prompt("Ingrese el segundo Numero :")

if(d > e){
  console.log("El mayor es: " + d)
}else{
  console.log("El mayor es: " + e)123
}
*/
//Ejercicio3

/*
let parimpar = prompt("Ingrese un numero par o impar :")

if(parimpar % 2 == 0){
  console.log("El numero "+ parimpar+ " es par")
}else{
  console.log("El numero "+ parimpar+ " es impar")
}
  */

//Ejercicio  4
/*
let number = 10

while(number > 0 ){
  console.log(number)
  number = number -1
 
}
*/
//Ejercicio 5
/*
let numberdos
do{

 numberdos = prompt("Ingrese un numero mayor a 100: ")
 numberdos = Number(numberdos)

}while(numberdos <= 100)

console.log("Ingresaste un numero mayor a 100: "+ numberdos)
*/

//Ejercicio 6
/*
function esPar( numero){

  if(numero % 2 == 0){
    return true;
  }else{
    return false;
  }

}

console.log("El numero 9 es par : " + esPar(9))
console.log("El numero 10 es par : " + esPar(10))
*/

//Ejercicio 7
/*
function convertirCelsiusAFahrenheit(celsius){
let F = celsius * 1.8 + 32
return console.log(celsius + "C son equivalentes a " + F + "F")
}

convertirCelsiusAFahrenheit(30);
convertirCelsiusAFahrenheit(40);
convertirCelsiusAFahrenheit(28);
*/

/*

let Persona = {
  nombre : "Nombre",
  edad : 30,
  ciudad: "Mallorca",

  cambiarCiudad: function(nuevaCiudad){
        this.ciudad = nuevaCiudad
        console.log("Nombre : " + Persona.nombre + 
  ", Edad : " + Persona.edad + " , Nueva ciudad: " + nuevaCiudad)
  }
}

console.log("Nombre : " + Persona.nombre + 
  ", Edad : " + Persona.edad + 
  ", Ciudad : " + Persona.ciudad
)

Persona.cambiarCiudad("Mendoza");

*/

/*
let Libro = {
  titulo : "Cien Años de Soledad",
  autor : "Gabriel García Márquez",
  año : 2015,

  esAntiguo : function(){
    let añoActual = new Date().getFullYear();
    let antiguedad = añoActual - this.año;

    if(antiguedad > 10){
      return console.log("El libro " + this.titulo + " es antiguo:" + true);
    }else{
      return console.log("El libro " + this.titulo + " es antiguo:" + false);
    }
  }
}

Libro.esAntiguo();
*/

/*

let numeros = [1,2,3,4,5,6,7,8,9,10]

console.log(numeros);

let numerosx2 = []

for (let i = 0; i < numeros.length; i++) {
  numerosx2[i] = numeros[i] * 2
}
console.log(numerosx2)


let pares = []

for(let j = 1 ; j < 21 ; j++){
  if(j % 2 == 0){
    pares.push(j);
  }
}

console.log(pares)
*/

const cambiarColor = () =>{

  let parrafos = document.querySelectorAll('p')

  parrafos.forEach(parrafo => {
    parrafo.style.color = 'blue'
  })
}

const buttonColor = document.getElementById("buttonColor");

buttonColor.addEventListener("click", ()=>{

cambiarColor();

})

const getDataInput = () =>{

  const inputTexto = document.getElementById("textInput").value;

  alert(inputTexto)

}

const buttonAlert = document.getElementById("buttonAlert");

buttonAlert.addEventListener("click", ()=>{

  getDataInput()
  
  })


const elementosli = document.querySelectorAll("ul li")


elementosli.forEach(elemento =>{
  elemento.addEventListener("click", ()=>{
    console.log(elemento.textContent)
  })
})


const input = document.getElementById("InputEj2")
const habilitarbtn = document.getElementById("habilitar")
const deshabilitarbtn= document.getElementById("deshabilitar")

deshabilitarbtn.addEventListener("click",() =>{
  input.disabled = true;
})

habilitarbtn.addEventListener("click",() =>{
  input.disabled = false;
})


const buttonCorreo = document.getElementById("buttonGuardar")


const getDataInputCorreo = () =>{

  const inputCorreo =document.getElementById("InputCorreo").value;

   document.getElementById("correoGuardado").textContent = inputCorreo

}

buttonCorreo.addEventListener("click", () =>{

  getDataInputCorreo();


})

const eliminarCorreo = document.getElementById("buttonDelete")

const deleteCorreoGuardado = () =>{
  document.getElementById("correoGuardado").textContent = ""
}
eliminarCorreo.addEventListener("click", () => {
 deleteCorreoGuardado();
})