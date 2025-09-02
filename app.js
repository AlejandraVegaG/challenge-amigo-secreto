// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = ['A', 'B'];
ulAmigos= document.querySelector("#listaAmigos");
displayAmigos = "";
listaAmigos.forEach(function (amigo, index) {
	displayAmigos += `<li> ${amigo} </li>`;
});
ulAmigos.innerHTML = displayAmigos;