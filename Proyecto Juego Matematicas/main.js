const d=document;

let content=`
<input type="number" placeholder="digite un numero a..." id="a" required>
<input type="number" placeholder="digite un numero b..." id="b" required>
<button id="btn" onclick="mayorNum()">Calcular</button>
<div id="res"></div>
`;

d.body.insertAdjacentHTML('beforeend', content);

function mayorNum() {
    let n1 = parseFloat(d.getElementById('a').value);
    let n2 = parseFloat(d.getElementById('b').value);
    let area = d.getElementById('res');

    console.log(n1, n2);
    if (isNaN(n1) || isNaN(n2)) {
        area.innerText = ''; // Borra el contenido del div "res"
        alert('Digite números válidos');
    } else if (n1 > n2) {
        area.innerText = 'El número a es mayor que el número b';
    } else if (n2 > n1) {
        area.innerText = 'El número b es mayor que el número a';
    } else {
        area.innerText = 'Ambos números son iguales';
    }
}