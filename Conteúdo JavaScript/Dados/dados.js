/* TIPOS DE DADOS

    > Gramática
        -Elementos da linguagem e suas combinações
        -A arte de falar e escrever corretamente
    > Vocabulário
        -Conjunto de termos e expressões
        -Agrupamento de palavras 

    -Precisamos saber como escrever
    -Precisamos saber os significados
    -Precisamos continuar aprendendo, para crescer nosso vocabulário


Conforme o ECMAScript standart temos 9 tipos de dados:
    * Data types
        * Primitive / Primitive value 
        * Structural
        * Structural Primitive
        
        
    ##Primitivos (não é objeto, e seu valor é imutável)
        
        -String
        -Number
        -Boolean
        -Undefined
        -Symbol
        -BigInt

    ##Estruturais
        -Object (recebe propriedades e funcionalidades)
            *Array
            *Map
            *Set
            *Date
            *...
        -Function

    ##Primitivo Estrutural / Structural Root Primitive
        -Null
*/


/* String

    *Cadeia de caracteres

    "" // aspas duplas
    '' // aspas simples
    `` // template literals ou template strings

    como utilizar: se o texto tiver aspas simples, ele todo deve estar contido dentro de aspas duplas
    se utilizar aspas duplas no texto, ele deverá estar contido dentro de aspas simples
    as crases permitem que façamos multi linhas dentro delas, além de permitir o uso tanto de aspas simples quanto de aspas duplas nos textos contidos nelas.\
    além disso, as crases permitem colocar expressões de linguagem no texto (interpolação)
*/
console.log('Iasmin')
console.log(`Iasmin
Torres`)
console.log(`Iasmin ${1+1}`)


/* Number 

Números
        - 33 // inteiros (positivos ou negativos)
        - 12.5 // reais (quebrados)
        - NaN // not a number
        - Infinity // infinito
    Valores vão dentro do parênteses
    Tem como colocar expressões (+, -, /, *)
 */ 
console.log(33)
console.log(12.5/3)


/* Boolean

    *somente 2 valores
    
        true // verdadeiro
        false // falso

    Para toda lógica de programação, há um verdadeiro ou falso
*/
console.log(false)


/* 
 *Undefined (indefinido)
    -algo que não existe
 
 *Null (nulo)
    -objeto que não possui nada dentro
    -diferente de indefinido (existe, mas não tem nada)
*/


/* Object

    -Objeto (estruturar dados)
    -Propriedades / Atributos
    -Funcionalidades / Métodos

   *como escrever:
    { propriedade: "valor"}
*/
console.log({
    name: "Mayk",
    idade: 36,
    andar: function() {
        console.log('andar')
    }
})


/* Array (vetores)

    -Uma lista
    -Agrupamento de dado (jeito de estruturar dados)

    ["Mayk", 36]
*/
console.log([
    "Leite",
    "Ovos",
    2,
    3
])
