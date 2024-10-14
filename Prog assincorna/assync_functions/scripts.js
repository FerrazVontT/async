async function soma(shi,rog) {
    return shi + rog;
}

console.log(soma(2,4));

soma(2,4).then(value => console.log(value));