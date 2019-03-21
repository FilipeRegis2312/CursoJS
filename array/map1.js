const nums = [1, 2, 10, 4, 5]

//For com proposito
let resultado = nums.map(function (e) {
    return `${e * 3}/${e * 2}/${(2000 + (e + 20) / e)}`;
})

console.log(resultado)

const soma10 = e => e + 10

console.log(nums.map(soma10))