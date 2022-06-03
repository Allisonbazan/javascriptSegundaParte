alumnos = [
    {
        nombreusuario: 'Allison',
        edadmiau:5
    },
    {
        nombreusuario: 'Lucy',
        edadmiau:56
    },
]

let mostraralumnos = (alumnosrecibidos) =>{
document.getelementbytagname("tbody")[0].innerHTML = '';
    alumnosrecibidos.forEach((element,index) => {
    //nueva linea en la tabla
    let texto1 =document.createElement ("tr");
    texto1.innerHTML = 
    //copiar una linea de la tabla
    <td scope="row">${index+1}</td>
    <td>${element.nombreusuario}</td>
    <td>${element.edadmiau}</td>
    <td>
      <button type="submit" class="btn btn-primary mb-3" onclick="editarRegistro(${index})">Editar</button>
    <button type="submit" class="btn btn-primary mb-3" onclick="eliminarRegistro( ${index} )">Eliminar</button>
    </td> ; 
       
    document.getelementbytagname("tbody")[0].appendchild(texto1);
    
});


}

let eliminarRegistro = () =>{
    console.log('Eliminar');
}

let editarRegistro = () =>{
   let posicionjava =document.getElementById('posicion').value;
   let nombrejava =document.getElementById('nombreusuario').value;
   let edadjava =document.getElementById('edadmiau').value;
}
//se utiliza para actualizar la linea
let actualizarRegistro = () =>{
    let posicionjava =document.getElementById('posicion').value;
    let nombrejava =document.getElementById('nombreusuario').value;
    let edadjava =document.getElementById('edadmiau').value;

    alumnos[posicion] = {


    }
 }

 let agregarregistro= () =>{
const nuevoalumno ={
    nombre: document.getElementById('nombreusuario').value,
    edad: document.getElementById('edadmiau ').value,
}

document.getElementById('nombreusuario').value = ' ';
document.getElementById('edadmiau').value = ' ';
alumnos.push (nuevoalumno);
mostraralumnos(alumnos); }