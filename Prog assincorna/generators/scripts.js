function* genTest() {
    let id = 0;
    while(true) {
        yield id++;
    }
}

let criarID = genTest();

console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);

console.log(criarID.next());