//const botonSimple = document.getElementById('botonSimple');
//botonSimple.addEventListener('click', () =>{
//    console.log('Evento nuevo desde JS');
//    alert('Evento nuevo desde JS');
//})

//const saludo = () => {
  //  console.log('Hola a todos desde la función Saludo');
    // Modal 
 //   alert('Hola a todos');
//}

//const onmouseoverTest =() =>{
 //  console.log('Disparo onmouseover');
//}


//const onmouseoutTest =() =>{
  //  console.log('Disparo onmouseout');
//}


alumnos = [
    {
        name: 'Allison',
        age:5
    },
    {
        name: 'Lucy',
        age:56
    },
]

let mostraralumnos = () =>{
alumnos.forEach((element,index) => {
    let texto1 =document.createElement ("tr");
    texto1.innerHTML= 
    //copiar una linea de la tabla
    <tr>
      <th scope="row">${index+1}</th>
      <td>${element.name}</td>
      <td>{element.age}</td>
      <td>
        <button type="submit" class="btn btn-primary mb-3" onclick="editarRegistro()">Editar</button>
      <button type="submit" class="btn btn-primary mb-3" onclick="eliminarRegistro()">Actualizar</button>
      </td>"
    </tr> ;
    document.getelementbytagname("tbody")[0].appendchild(texto1);
    
});


}

let eliminarRegistro = () =>{
    console.log('Eliminar');
}

let editarRegistro = () =>{
    console.log('Editar');
}