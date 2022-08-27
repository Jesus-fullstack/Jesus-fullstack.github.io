let x = document.querySelector("h1");
x.innerText = "gracias a <br> dios";
let azul = document.querySelector(".azul");
azul.innerHTML ="por favor ponte azul";
let amarillo = document.querySelector("#amarillo");
let input1 = document.querySelector(".primero");
let input2 = document.querySelector(".segundo");
let titulo = document.createElement("p")
let mensaje = document.querySelector("#resultado");


amarillo.innerHTML ="por favor ponte amarillo";
amarillo.classList.add("amarillo")
azul.classList.add("rojo")
amarillo.classList.remove("amarillo")


let invisible = document.createElement("img")
titulo.innerHTML ="Calculador geckoniana (Solo suma)";
invisible.setAttribute("src","imagenes\\gecko con fondo azul.png")
invisible.setAttribute("height","100px")
amarillo.innerHTML = "";
amarillo.append(invisible)
amarillo.append(titulo)

function suma() {
let z = Number(input1.value) + Number(input2.value);
const resultado = "Este es el tan esperado resultado " + z;
mensaje.innerHTML = resultado;
}


