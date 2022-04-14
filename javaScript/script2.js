const meuArray = [30, 40, 50, 5, 223, 3049, 3202, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return[...mySet];

}

console.log(valoresUnicos(meuArray));