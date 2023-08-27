// EXERCÍCIO 
let nomePessoaMaisVelha = prompt('Digite o nome da pessoa mais velha');
let idadeDaPessoaMaisVelha = prompt('Digite a idade da pessoa mais velha');

let nomeDaPessoaMaisNova = prompt("Digite o nome da pessoa mais nova");
let idadeDaPessoaMaisNova = prompt("Digite a idade da pessoa mais nova");

let diferencaDeIdade = idadeDaPessoaMaisVelha - idadeDaPessoaMaisNova;

alert(
    "Pessoa mais velha: " + nomePessoaMaisVelha + "\nIdade: " + idadeDaPessoaMaisVelha + 
    "\n\n Pessoa mais nova: " + nomeDaPessoaMaisNova + "\nIdade: " + idadeDaPessoaMaisNova + 
    "\n\nDiferença de idade: " + diferencaDeIdade
)