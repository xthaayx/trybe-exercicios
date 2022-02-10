let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let index = 0; index < numbers.length; index +=1){
//     console.log(numbers[index]);
// }

let soma = 0;

for(let index = 0; index <numbers.length; index +=1){
    soma += numbers[index]; //em cada soma ele vai comar um elemento do array
}

let media = soma / numbers.length
console.log(media);