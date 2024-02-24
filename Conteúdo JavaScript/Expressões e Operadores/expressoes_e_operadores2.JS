// OPERADORES DE ATRIBUIÇÃO (assignment)
let x

console.log(x)

//assignment - atribuiçar simples ( x recebe 1)
x = 1

//addition assignment
x += 2 // é o mesmo que: x = x + 2 >> x vai valer 3

//subtraction assignment
x -= 1 // é o mesmo que: x = x - 1 >> x vai valer 2

//multiplication assignment
x *= 2 // é o mesmo que: x + x * 2 >> x vai valer 4

//division assignment
x /= 2 // é o mesmo que: x = x / 2 >> x vai valer 2

//remainder, exponetiation
x %= 2 // resto
x **= 2 // exponenciação


/* 
    OPERADORES LÓGICOS (logical operators)
        - 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso 
*/

let pao = true
let queijo = true

// AND &&
console.log(pao && queijo) // se o pao e o queijo estiverem recebendo true, retornará true. se um deles ou os dois receberem falso, retornará false

//OR || 
console.log(pao || queijo) // se houver true apenas pro pao, ou apenas pro queijo ou até mesmo para os dois, retornará true. somente se tanto o pao quanto o queijo receberem false, que retornará false

// NOT !
console.log(!pao) // troca de valor: se o pao tiver recebido true, agora retornará false


/*
    OPERADOR CONDICIONAL (Ternário)
        Dependendo da condição, nós receberemos valores diferentes

        -Condição: então valor 1, se não valor 2
*/
        condition ? value1 : value2

//Exemplos:
let ovo = true
let bacon = true

const niceBreakfast = ovo && bacon ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)

//Verificar se uma pessoa é maior de 18 anos
let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive) // retornará "can't drive"



// OPERADOR DE STRING (String Operator)

//comparison (comparação)
console.log( 'a' == "a" ) //true

//concatenation (concatenação)
let alpha = 'alpha'
console.log(alpha + 'bet') // retornará: alphabet



/*
    FALSY
    Quando um valor é considerado false em contextos onde em booleano é obrigatorio
    (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/
console.log( "" ? 'verdadeiro' : 'falso' ) //verdadeiro

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório
    (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/
console.log( {} ? 'verdadeiro' : 'falso' ) //verdadeiro

/*
    OPERATORS PRECEDENCE 
        Precedência de operadores (do mais ao menos importante)

    * grouping  ( )
    * negação e incremento  ! ++ --
    * multiplicação e divisão  * /
    * adição e subtração  + -
    * relacional  < <= > >=
    * igualdade  == != === !==
    * AND  &&
    * OR  ||
    * conditional  ?:
    * assignment(atribuição)  = += -= *=
 */

