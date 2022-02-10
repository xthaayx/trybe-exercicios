//const nota = 89 ; // exemplo de if else

//if (nota >= 80){
    //console.log("Parabéns, você foi aprovada(o)!");
//}
//else if (nota < 80 && nota >= 60){
    //console.log ("Você está na nossa lista de espera");
//}
//else {
    //console.log("Você foi reprovada(o)");
//}

//const comida = 'pão na chapa'; //exemplo de &&
//let bebida = 'água';

//if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  //console.log('Muito obrigado pela refeição :)');
//} else {
  //console.log('Acho que houve um engano com meu pedido');
//} 

//const conditionOne = true;
//const conditionTwo = false;

//console.log(conditionOne && conditionTwo);

//const cenouras = true;
//const leite = true;
//const arroz = true;
//const feijao = false;

//let listaDeCompras = cenouras && leite && arroz && feijao;
//console.log(listaDeCompras);

//const currentHour = 13; 
//let message ="12";

//if (message >= 22){
  //   console.log("Não deveríamos comer nada, é hora de dormir");
//}
//else if (message>=18 &&  message < 22){
  //  console.log("Rango da noite, vamos jantar :D");
//}
//else if (message >=14 && message < 18){
  //  console.log("Vamos fazer um bolo pro café da tarde?");
//}
//else if (message >=11 && message < 14){
  //  console.log("Hora do almoço!!!" );
//}
//else{
  //  console.log("Hmmm, cheiro de café recém passado");
//}

//const bebidaPrincipal =  'coca cola'; // exemplo de ||
//const bebidaAlternativa = 'água';

//if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  //console.log("Obrigado por me atender :D")
//} else {
  //console.log("Ei, eu não pedi isso!");
//}


// let weekDay = 'sabado';

// if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay ==='quinta-feira' || weekDay ==='sexta-feira'){
//     console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// }
// else{
//     console.log("FINALMENTE, descanso merecido UwU")
// }

// console.log((2 + 2) === 4); //exemplo de ! (not)

// console.log(!(2 + 2) === 4);

// const squirtle = "melhor pokemon inicial";

// console.log(!squirtle);

// switch -- case

// let trafficLight = "rosa"

// switch (trafficLight){
//   case "vermelho":
//     console.log("pare");
//     break;

//   case "amarelo":
//     console.log("atenção");
//     break;

//   case "verde":
//     console.log("siga");
//     break;

//   default:
//     console.log("banana");
//     break;
// }

// let resultado = 60; // dando erro

// switch (resultado){
//   case '>=80':
//     console.log("aprovada");
//     break;

//   case '<80 && >=60':
//     console.log("lista");
//     break;

//   case '<60':
//     console.log("reprovada");
//     break;
   
//   default:
//     console.log("não se aplica") 
//     break;

// }

//Array

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro']; //array

// console.log(tasksList.length);

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.pop();  // remove a última tarefa
// console.log(tasksList);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu[2];

// console.log(indexOfPortfolio);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push('Contato');

// console.log(menu);

//FOR
// let numero =7;
// for(let contador = 1;contador <=9;contador ++){
//   console.log(numero * contador);
// }

// let listaDeNomes = ["Thaysa" , "Monica" , "Felipe"];
// for(let index = 0; index < listaDeNomes.length; index += 1){
//   var mensagem = "Boas vindas, " + listaDeNomes[index] + "!";
//   console.log(mensagem);
//}

//imprime elementos da lista
// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// for(let index = 0; index < groceryList.length; index += 1){
//   console.log(groceryList[index]);
// }

//FOR/OF

// let word = 'Hello';
// for (let letter of word) {
//   console.log(letter);
// }


// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//   sum += 1;
//   console.log(sum);
// }

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for(let nome of names){
//   console.log(nome);
// }

//LOGICA DE PROGRAMAÇÃO
//Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":
// let fruits = [3, 4, 10, 1, 12];
// let sun = 0;
// for(let index = 0; index < fruits.length; index += 1){
//   sun += fruits[index];
// }

// if (sun > 15) {
//   console.log(sun);
// }
// else{
//   console.log('Valor menor que 16');
// }

//OBJETO
//supondo que estamos trabalhando com um software que precisa guardar informações de um musico
//  let name = 'Milton';
//  let lastName = "Nascimento";
//  let nickName = 'Bituca';
//  let age = 77;
//  let bestAlbuns = ['Travessia' , 'Clube da esquina' , 'Minas' ];

 //Podemos trocar por :

//  let singer = {
//    name: 'Milton',
//    lastName: 'Nascimento',
//    nickName: 'Bituca',
//    age: 77,
//    bestAlbuns: ['Travessia' , 'Clube da esquina' , 'Minas'],
//    bornInfo: {
//      city: 'Rio de janeiro',
//      state: 'Rio de janeiro'
//    }
//  };

//  console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');
//  //uma das formas de acessar propriedades dentro do objeto .valor.
//  // outra forma é ultilizando chaves

//  console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

//  // criando nova propriedade
//  singer['fullName'] = singer.name + ' ' + singer.lastName;

//  console.table(singer);

//  console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state + ' na cidade do ' + singer.bornInfo.city + '.');

// let diasDaSemana = {
//   1: 'domingo',
//   2: 'segunda',
//   3: 'terça',
//   4: 'quarta',
//   5: 'quinta',
//   6: 'sexta',
//   7: 'sábado',
//   };

//   diasDaSemana.1; // SyntaxError: Unexpected number
//   console.log(diasDaSemana['1']); // domingo

// let conta = {
//   agencia: '0000',
//   banco: {
//     cod: '012',
//     id: 4,
//     nome: 'TrybeBank',
//   },
// };

// let infoDoBanco = 'banco';
// console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
// console.log(conta[infoDoBanco]['nome']); // TrybeBank

// console.log(conta.agencia); // 0000
// console.log(conta['agencia']); // 0000

// console.log(conta.banco.cod); // 012
// console.log(conta['banco']['id']); // 4

// let usuario = {
//   id: 99,
//   email: 'jakeperalta@gmail.com',
//   infoPessoal: {
//     nome: 'Jake',
//     sobrenome: 'Peralta',
//     endereco: {
//       rua: 'Smith Street',
//       bairro: 'Brooklyn',
//       cidade: 'Nova Iorque',
//       estado: 'Nova Iorque',
//     },
//   },
// };

// console.log(usuario['id']); // 99
// console.log(usuario.email); // jakeperalta@gmail.com

// console.log(usuario.infoPessoal.endereco.rua); // Smith Street
// console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//objeto dentro de array
// let moradores = [
//   {
//     nome: 'Luiza',
//     sobrenome: 'Guimarães',
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: 'William',
//     sobrenome: 'Albuquerque',
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: 'Murilo',
//     sobrenome: 'Ferraz',
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: 'Zoey',
//     sobrenome: 'Brooks',
//     andar: 1,
//     apartamento: 101,
//   },
// ];

// let primeiroMorador = moradores[0];
// console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
// console.log(primeiroMorador['andar']); // 10

// let ultimoMorador = moradores[moradores.length - 1];
// console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
// console.log(ultimoMorador.nome); // Zoey


// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3
//   },
//   bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
// };
// player['fulName']= player.name + ' ' + player.lastName;

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

// console.log('A jogadora ' + player.fulName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

//FOR/IN

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }

//FUNÇÃO


// // Sem função
// let nome = 'João';

// console.log('Bom dia, ' + nome);


// // Com função
// function bomDiaTryber(nome) {
//   console.log('Bom dia, ' + nome);
// }

// bomDiaTryber('João'); // Bom dia, João
// bomDiaTryber('Julia'); // Bom dia, Julia
// bomDiaTryber('Marcelo'); // Bom dia, Marcelo

// let status = 'deslogado';

// function logarDeslogar() {
//   if (status === 'deslogado') {
//     status = 'logado';
//   } else {
//     status = 'deslogado';
//   }
// }

// console.log(status); // deslogado

// logarDeslogar();
// console.log(status); // logado

// logarDeslogar();
// console.log(status); // deslogado

// console.log('O usuário está ' + status); // O usuário está deslogado

// Com função
// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(5, 2)); // 7

// function maiorNum(primeiroNum, segundoNum) {
//   if (primeiroNum > segundoNum) {
//     return primeiroNum + ' é maior que ' + segundoNum;
//   } else if (segundoNum > primeiroNum) {
//     return segundoNum + ' é maior que ' + primeiroNum;
//   } else {
//     return 'Os números são iguais';
//   }
// }

// console.log(maiorNum(10, 20)); // 20 é maior que 10
// console.log(maiorNum(2, -5)); // 2 é maior que -5
// console.log(maiorNum(1, 1)); // Os números são iguais

