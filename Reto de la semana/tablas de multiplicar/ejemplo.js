let saludo= () => {
    for (let ciclo = 1; ciclo <= 10; ciclo++) {
        let tabla = 1;
        let texth1 = document.createElement("tr");
        let resultado = ciclo * tabla;
        texth1.innerHTML = `<th>${tabla}*${ciclo}</th><th>=${resultado}</th>`; 
        document.getElementsByTagName("tbody")[0].appendChild(texth1);
    }
    for (let ciclo = 1; ciclo <= 10; ciclo++) {
        let tabla = 2;
        let texth1 = document.createElement("tr");
        let resultado = ciclo * tabla;
        texth1.innerHTML = `<th>${tabla}*${ciclo}</th><th>=${resultado}</th>`; 
        document.getElementsByTagName("tbody")[1].appendChild(texth1);
    }
}
saludo();