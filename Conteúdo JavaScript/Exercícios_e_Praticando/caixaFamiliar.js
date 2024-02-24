/*  ### Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e despesas e 
    irá mostrar uma mensagem se a família está com saldo positivo ou negativo,
    seguido do valor do saldo.
*/

let caixaFamiliar = {
    receitas:[
        502.74,
        1200,
        370,
        4500
    ],
    despesas:[
        115,
        200,
        5000,
        20.15
    ],
}

function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }

    return total
}

function calcular(){
   const calcularReceita = sum (caixaFamiliar.receitas)
   const calcularDespesa = sum (caixaFamiliar.despesas)

   const total = calcularReceita - calcularDespesa

   let saldoPositivo = total > 0
   let saldoNegativo = total < 0
   
   if(saldoPositivo) {
       console.log(`O saldo da família é positivo: ${total}`)
   } else if(saldoNegativo) {
       console.log(`O saldo da família é negativo: ${total}`)
   } else {
       console.log(`Saldo nulo: ${total}`)
   }
}

calcular()