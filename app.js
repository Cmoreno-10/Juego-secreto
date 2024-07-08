let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

console.log(numeroSecreto);

function  asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    // console.log(typeof(numeroDeUsuario));  permite saber que tipo de tado está arrojando 
 
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertó el numero en ${intentos} ${(intentos ===1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");


    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","el numero es menor")
        } else {
            asignarTextoElemento("p","el numero es mayor")
    }
    intentos++;
    limpiarCaja();
 }
    return;
}

function limpiarCaja(){
    let valorCaja= document.querySelector("#valorUsuario").value = "";

}

function  generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos  todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya fueron sorteados todo los número posibles");
    } else {
    // Si el numero generado está en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}



function condicionesIniciales(){
    asignarTextoElemento("H1", "Juego del Numero Secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
       //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego 
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();