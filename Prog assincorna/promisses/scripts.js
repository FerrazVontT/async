let p = Promise.resolve(5);

console.log("Qualquer coisa");

console.log(p);

p.then((value) => {
    console.log(`O valor da promisse é ${value}`);
    return value + 10;

}) // <--- não usar ; se for usar outro then... encerra o encadeamento

.then((value) => {console.log(`O novo valor da promisse é ${value}`)});