let tablas = () => {
    let tablas = document.getElementsByTagName('table');
    for (let tabla = 0; tabla< tablas.length; tabla++ ){
        for (let ciclo = 1; ciclo <= 10; ciclo++) {
            let texth1 = document.createElement("tr");
            let resultado = ciclo * tabla;
            texth1.innerHTML = `<th>${tabla+1}*${ciclo}</th><th>=${resultado}</th>`;
            document.getElementsByTagName("tbody")[tabla].appendChild(texth1);
        }
    }
}
tablas();