const d=document;

function GetRamdomInt(min, max) {
    return Math.floor(Math.random()*(max-min))+min;
}

let array=[];

for (let i = 0; i < 10; i++) {
    array.push(GetRamdomInt(1,100));
}

//se hace una copia del array sin necesidad de afectar el array original
let array2=array.slice();

array2.push(5);

console.log("Primer Array");
console.log(array);
console.log("Segundo Array");
console.log(array2);