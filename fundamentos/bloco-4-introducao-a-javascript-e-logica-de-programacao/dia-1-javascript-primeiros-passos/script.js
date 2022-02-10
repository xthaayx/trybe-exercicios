

// const a = 5;
// const b = 10;
// const c = 15;

//1 

// console.log('Soma: ' + (a+b));
// console.log('Subtração: ' + (a-b));
// console.log('Multiplicação: ' + (a*b));
// console.log('Divisão: ' + (a/b));
// console.log('Módulo: ' + (a%b));

//2

// if (a > b){
//     console.log(a + ' é maior que '  + b);
// }
// else{
//     console.log(b + ' é maior que ' + a);
// }

//3

// if (a > b && a > c){
//     console.log('a: ' + a + ' é o maior numero.');
// }
// else if (b > a && b > c){
//     console.log('b: ' + b + ' é o maior numero.');
// }
// else{
//     console.log('c: ' + c + ' é o maior numero.');
// }

//4

// const number = -5;

// if (number > 0){
//     console.log('Positive');
// }
// else if(number < 0){
//     console.log('Negative');
// }
// else{
//     console.log('Zero');
// }

//5

// const angleA = 25;
// const angleB = 60;
// const angleC = 90;

// if (angleA + angleB + angleC === 180){
//     console.log('true');
// }
// else if (angleA <= 0 || angleB <= 0 || angleC <= 0){
//     console.log('erro');
// }
// else{
//     console.log('false');
// }


//6

const chess= "PEÂO";

switch (chess.toLowerCase()){
    case "peão":
        console.log('Peão: para frente uma casa por vez');
        break;

    case "bispo":
        console.log('Bispo: quantas casa quiser na diagonal');
        break;
    
    case "torre":
        console.log('Torre: em linha reta horizontal e vertical');
        break;
    
    case "cavalo":
        console.log('Cavalo: duas casa horizontais ou verticais e mais uma casa formando um L');
        break;

    case "rainha":
        console.log('Rainha: Qualquer numero de casa em qualquer direção');
        break;

    case "rei":
        console.log('Rei: uma unica casa em qualquer direção');
        break;

    default:
        console.log('Erro!');
        break;
            
}