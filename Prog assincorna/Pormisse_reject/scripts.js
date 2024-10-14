function verificarNum(num){
    return new Promise((resolve, reject) => {
        if(num == 2){
            console.log(`O número é ${num}`);
        }else{
            reject(new Error("Falhou"));
        }
    }
)}

verificarNum(2);
verificarNum(7);