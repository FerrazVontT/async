let p = Promise.resolve(new Error("Não deu certo"));

console.log("Qualquer coisa");

p.then(value => console.log(value))
.catch(reason =>console.log("falhou: " + reason));


