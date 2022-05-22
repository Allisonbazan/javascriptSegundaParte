class Cuadrado{
    constructor(lado){
        this.lado = lado
    }
    area(){
        return this.lado*2;
    }
    perimetro(){
        return this.lado*4;
    }
}


let areaCuadrado = () =>{
    let lado = parseInt( document.getElementById('ladoCuadrado').value);
    let cuadrado = new Cuadrado(lado);
    document.getElementById('resultadoCuadrado').innerHTML = `<strong>El area del cuadrado es ${cuadrado.area()}</strong>`;
}
let perimetroCuadrado = () =>{
    let lado = parseInt( document.getElementById('ladoCuadrado').value);
    let cuadrado = new Cuadrado(lado);
    document.getElementById('resultadoCuadrado').innerHTML = `<strong>El perímetro del cuadrado es ${cuadrado.perimetro()}</strong>`;
}