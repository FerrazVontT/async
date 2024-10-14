function somaDelay(a,b) {
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a+b);
        }, 3000);
    })
}

async function resulSoma(a,b,c) {
    let x = somaDelay(a,b);
    let y = c;

    return await x + y;
}

resulSoma(11,7,3).then(value => console.log(value));