// Declarar funções dentro de variáveis

/* FUNCTION EXPRESSION / FUNCTION ANONYMOUS
parâmetros (parameters) : dentro do parênteses */
const sum = function (number1, number2){ 
    let total = (number1 + number2)
    return total //funções sem return são consideradas undefined
}

/* 
    sum(2,3) 
    sum (10,12)
    sum(472,514) // argumentos (arguments)
// nesse ecopo: number1 será igual a 2 e number2 será igual a 3 */

//pode-se fazer também da seguinte maneira:
let number1 = 34
let number2 = 25
sum (number1, number2)

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é igual a ${sum(number1, number2)}`)


// exemplo de função como um liquidificador:
function fazerSuco(fruta1, fruta2){
    return 'suco de:' + fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maçã')
console.log(copo)
// a função é uma "caixa mágica", onde colocam-se coisas dentro dela e ela retorna essas coisas "transformadas"


//FUNCTION SCOPE
let subject = 'create video'
function createThink(subject){
    subject = 'study'
    return subject
}
console.log(subject) // vai apresentar o 'create video'  (q foi determinado fora da função)
console.log(createThing(subject)) // vai apresentar o 'study' (q foi determinado dentro da função)

// explicação: o 'subject' dentro do escopo da funçao createThink, tem um significado diferente do 'subject' da variável let, mas se o subject não for apresentado dentro dos parenteses da função createThink, será sempre considerado na apresentação (console.log) o significado atribuído depois, no caso, 'study.



//FUNCTION HOISTING
sayMyName()

function sayMyName(){
    console.log('Iasmin')
}
//uma função escrita dessa forma sofre o 'hoisting', que é como se o js colocasse a funçao em cima 


//ARROW FUNCTION
//colocar "seta" entre os parenteses e as chaves, não precisando colocar 'function' depois da variavel
const myName = (name) => {
    console.log(name)
}
myName('Iasmin')
//jeito mais rapido de escrever uma função


//CALLBACK FUNCTION
function sayYourName(name){
    console.log(name)
}
sayYourName(
    () => {
        console.log('estou e uma callbalck')
    }
) 
//função passando como parâmetro para outra função (chamando uma função e chamando uma outra função de volta)


/*FUNCTION CONSTRUCTOR

    * expressão new
    * criar um novo objeto
    * this keyword
*/
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + "está andando" 
    }
}
const iasmin = new Person('Iasmin')
const gregory = new Person ('Gregory')
console.log(iasmin) // vai retornar: Person {name: 'Iasmin'} >> terá uma Person, com uma propriedade chamada 'name' que, no caso, será 'iasmin'
console.log(gregory.walk()) // vai retornar: Gregory está andando

//outro tupo de function constructor:
let date = new Date("2020-12-01")
console.log(date) //vai retornar a data 

