const d=document;

let contenido=`
<input id="a" placeholder="Digite el numero a..." type="number">
<input id="b" placeholder="Digite el numero b..." type="number">
<input id="c" placeholder="Digite el numero c..." type="number">
<br>
<br>
<button id="btn">Calcular</button>
`;

d.body.insertAdjacentHTML('beforeend', contenido);


let num1=d.getElementById('a');
let num2=d.getElementById('b');
let num3=d.getElementById('c');
let btn=d.getElementById('btn');

btn.addEventListener('click', ()=>{
    let a=num1.value;
    let b=num2.value;
    let c=num3.value;
    // Calcula el discriminante
    let discriminante = (b * b) - (4 * a * c);

    if (discriminante < 0) {
        console.log('No hay soluciones reales');
    } else if (discriminante === 0) {
        let x = -b / (2 * a);
        console.log('Una solución real:', x);
    } else {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        console.log('Dos soluciones reales:', x1, 'y', x2);
    }
});
