let word = "Делим строку на маессив подстрок по запятым"
let result = word.split("е")
console.log(result);

// Дана строка где есть и числа и строки -> "hello 51 asdf 125 10 sdffg lll 4 as45 65aa 7 8" 
// надо найти все строки и в самом конце выводить итоговую длину всех строк вместе
let mix = "hello 51 asdf 125 10 sdffg lll 4 as45 65aa 7 8"
let newmix = mix.split(" ")
let sum = 0
for (let i = 0; i < newmix.length; i++) {
    //sum += isNaN(newmix[i]) ? newmix[i].length : 0

    //let result = isNan(newmix[i]) ? newmix[i].length : 0
    //sum = sum + result

    if (isNaN(newmix[i])) {
        sum += newmix[i].length
    }
}
console.log(sum);

let word1 = "hello"
let arrayOfSimbols = word1.split("") // ['h', 'e', 'l', 'l', 'o']
console.log(arrayOfSimbols);
let reversedArray = arrayOfSimbols.reverse()
console.log(reversedArray); // ['o', 'l', 'l', 'e', 'h']
let reversedWord = reversedArray.join("")
console.log(reversedWord); // olleh

// word1.split("").reverse().join("") ->
// -> ['h', 'e', 'l', 'l', 'o'].reverse().join("")
// -> ['o', 'l', 'l', 'e', 'h'].join("")
// -> "olleh"

console.log(word1.split("").reverse().join("") === word1 ? "палиндром" : "не палиндром")

// дан массив чисел [5, 2, -6, 2, 10, 15, 23, -13, 51, -37]
// получить сумму только положительных чисел и вывести результат в консоли в виде такой строки
// "5+2+2+10+15+23+51= 108"
let newar = [5, 2, -6, 2, 10, 15, 23, -13, 51, -37]
let ar = []
let sum1 = 0
for (let i = 0; i < newar.length; i ++) {
    if (newar[i] >= 0) {
        ar.push(newar[i]); 
        sum1 += newar[i]      
    }
}
let sumString = ar.join('+')
console.log(`${sumString}=${sum1}`);

let nums = [5, 2, -6, "3", 10, 15, 23, -13, 51, -37]
//includes 
//строгое сравнение ===
console.log(nums.includes(15)); // true
console.log(nums.includes("2")); //false
console.log(nums.includes("3")); // true

//indexOf ->
//lastIndexOf <-
console.log(nums.indexOf(2)); // 1
console.log(nums.indexOf("2")); // -1
console.log(nums.indexOf("3")); // 3
console.log(nums.lastIndexOf(30)); // -1 (не найден индекс - индекс по умолчанию)
// random
// Math.random() [0 - 1)
// Math.random() * n [0 - 1 * n)
console.log(Math.random() * 10);

// в нижную сторону округляет
console.log(Math.floor(7.9)) // 7
console.log(Math.floor(7.1)) // 7

// в верхную сторону округляет
console.log(Math.ceil(7.9)) // 8
console.log(Math.ceil(7.1)) // 8

// округялет как в математике
console.log(Math.round(7.9)) // 8
console.log(Math.round(7.1)) // 7

console.log(Math.round(Math.random() * 10));

// [0 - 100)
// 99.9 => 99
// 99 + 1 = 100
let rand = Math.floor(Math.random() * 100) + 1;


