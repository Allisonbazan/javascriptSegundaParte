const enviar= () => {
 // Obtengo el input
 let mascota = document.getElementById('petname');

 // Imprimo en consola el valor del input

 console.log(mascota.value);
 // Creo una etiqueta tipo p

 let petnew = document.createElement("p");
 petnew.innerText = mascota.value;
 document.getElementById("resultallison").appendChild(petnew);
 mascota.value = null;
}