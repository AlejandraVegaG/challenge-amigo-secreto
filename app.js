// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];

/** Evalua el input #amigo y agrega:
  * Si no es vacío:
  *  Limpia el input #amigo
  *  y agrega amigo del input a la arrayAmigos.
  * En caso de que sea vacío da una alerta.
**/
function agregarAmigo(){
	let inputAmigo = document.querySelector("#amigo");
	let amigo = inputAmigo.value;
	if(inputAmigo.value != ''){
		arrayAmigos.push(amigo);
		limpiarInputAmigo();
		mostrarAmigos();
		setAmigos("#resultado", ''); // Limpia el resultado
	}else{
		alert("¡Escribe primero a tu amigo en el recuadro! 👀");
	}
}

/** Imprime en pantalla un amigo aleatorio 
  * Evalua si está vacío el array, da una alerta de así serlo
  * Si no, entonces imprime el amigo sorteado de getResult()
**/
function sortearAmigo(){
	let displayResult = '';
	if(arrayAmigos.length === 0){
		alert("¡Agrega amigos primero! 🤨");
	}else{
		displayResult = `<li> ${getResultAmigo()} </li>`;
		limpiarInputAmigo(); //Limpia por si tenía algo escrito
		setAmigos("#resultado", displayResult); // Imprime el resultado
		setAmigos("#listaAmigos", ''); //Limpia el display de la lista de amigos
	}
}

/** Imprime en pantalla el array de amigos actualizada **/
function mostrarAmigos(){
	let displayAmigos = "";
	arrayAmigos.forEach(function (amigo, index) {
		displayAmigos += `<li> ${amigo} </li>`;
	});
	setAmigos("#listaAmigos",displayAmigos);
}

/** Obtiene un amigo aleatorio **/
function getResultAmigo(){
	let indexResult = Math.floor( Math.random() * arrayAmigos.length );
	return arrayAmigos[indexResult];
}

/** Limpia el input #amigo **/
function limpiarInputAmigo(){
	document.querySelector("#amigo").value = "";
}

/** Reemplaza lo que se encuentra dentro de ul #listaAmigos 
  * params string texto
**/
function setAmigos(id, texto=""){
	let ulAmigos = document.querySelector(id);
	ulAmigos.innerHTML = texto;
}