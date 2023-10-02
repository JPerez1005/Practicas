const d=document;

let contenido=`
<input type="number" id="num1" placeholder="digite un numero...">
<input type="text" id="op" placeholder="digite un operador(+,-,*,/)...">
<input type="number" id="num2" placeholder="digite otro numero...">
<button id="btn">Calcular</button>
`;

d.body.insertAdjacentHTML('beforeend',contenido);

let num1=d.getElementById('num1');
let num2=d.getElementById('num2');
let op=d.getElementById('op');
let btn=d.getElementById('btn');

btn.addEventListener('click',()=>{
    let res1=num1.value;
    let res2=num2.value;
    let ope=op.value;
    if(ope=='+'){
        alert('eligió más');
        console.log('eligio mas');
    }else{
        alert('valor invalido');
        console.log('valor invalido');
    }
});
