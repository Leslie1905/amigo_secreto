// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo');
    let nombre = nombreAmigo.value;
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    nombreAmigo.value = '';
}

function mostrarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';  

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    let listaNombres = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[listaNombres];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `${amigoSorteado}`;

    if (amigos.length === 0) {
           alert('No hay amigos en la lista para realizar el sorteo.');
           limpiarCaja();  
           
       }     
          return;
   }

    function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    
 }
