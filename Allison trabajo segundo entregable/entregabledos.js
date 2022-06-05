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
    texto1.innerHTML = ´    
    
    <td scope="row">${ index + 1 } </td> 
    <td>${element.nombreusuario}</td>
    <td>${element.edadmiau}</td>
    <td>
      <button type="submit" class="btn btn-primary mb-3" onclick="editarRegistro()">Editar</button>
        <button type="submit" class="btn btn-primary mb-3" onclick="eliminarRegistro()">Eliminar</button>
    </td>    ; ´

       document.getElementbyTagname("tbody")[0].appendchild(texto1);
    
});

}

let eliminarRegistro = (variablecualquiera) =>{
    alumnos = alumnos.filter((alumno,index)=> index !== variablecualquiera);
    mostraralumnos();
}//me peude explicar el metodo filter?

let editarRegistro = () =>{
   let posicionjava =document.getElementById('posicion').value;
   let nombrejava =document.getElementById('nombreusuario').value;
   let edadjava =document.getElementById('edadmiau').value;
}
//rellenar formulario
let rellenarformulario = (variablecualquiera) => {
    
    document.getElementById('posicion').value =variablecualquiera;
    document.getElementById('nombreusuario').value = alumnos [variablecualquiera].nombreusuario;
    document.getElementById('edadmiau').value = alumnos [variablecualquiera].edadmiau;

}


//se utiliza para actualizar la linea
let actualizarRegistro = () =>{
    let posicionjava =document.getElementById('posicion').value;
    let nombrejava =document.getElementById('nombreusuario').value;
    let edadjava =document.getElementById('edadmiau').value;

    alumnos[posicion] = {
        nombrejava : nombreusuario
        edadjava: edadmiau

    }
    document.getElementById('posicion').value = ' ';
    document.getElementById('nombreusuario').value = ' ';
    document.getElementById('edadmiau').value = ' ';
    mostraralumnos(alumnos);
 }

 let agregarregistro= () =>{

    let alumnos= []
    let nombre= document.getElementById('nombreusuario').value
    let edad= document.getElementById("edadmiau ").value


document.getElementById('nombreusuario').value = ' ';
document.getElementById('edadmiau').value = ' ';
alumnos.push (nuevoalumno); }
mostraralumnos(alumnos);