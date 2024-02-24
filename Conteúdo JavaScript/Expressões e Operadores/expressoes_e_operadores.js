/*  EXPRESSÕES E OPERADORES

        - Expressions
        - Operators
            Binary
            Unary
            Ternary
*/

let number = 1 // expressão, pois está declarando uma variável

console.log(number + 1) //operador binário (2 valores que precisa para que o operador esteja entre eles, no caso um operador araitmético de soma)

console.log(++number) //operador unário (1 valor) : vai adicionar o número 2 vezes
console.log(--number)//operador unário (1 valor) : vai subtrair o número 2 vezes

console.log(true ? 'alo' : 'nada') //operador ternário: se for verdadeiro (true), vai receber 'alo', se não, vai receber 'nada'
console.log(false ? 'alo' : 'nada')//operador ternário: se for falso (false), vai receber 'alo', se não, vai receber 'nada'



/*  new

    - left-hand size expression
    - criar um novo objeto
*/

    let name = new String ('Iasmin')
    name.surName = "Torres"

    let age = new Number (23)

    console.log(name, age)
    // retornará: >String{"Iasmin", surName: "Torres"}
    //            >Number{23}



/*
    Operadores unários
        typeof
        delete
*/
    console.log(typeof "iasmin") //qual é o tipo de dado, no caso String

    const person = {
        name: "Iasmin",
        age: 17
    }
    delete person.age // deletar um dos elementos existentes(no caso, a idade)
    console.log(person) // retornará: {name: "Iasmin"}



//OPERADORES ARITMÉTICOS: fazer cálculos matemáticos

    //multiplicação
    console.log(3.2 * 5)
    //divisão
    console.log(14 / 2)
    //soma
    console.log(34 + 67)
    //subtração
    console.log(23 - 17)
    
    //resto da divisão
    let remainder
    remainder = 11 % 3 //o resto da divisão de 11 por 3
    console.log (remainder)
    
    //incremento
    let increment = 0
    increment++ //o incremento irá sempre adicionar +1
    console.log(increment)

    //decremento
    let decrement = 0
    decrement-- //o decremento irá sempre subtrair -1
    console.log(decrement)

    //exponencial
    console.log(3**3) // 3 elevado a 3



/*  Grouping Operator ()
        Operador que agrupa expressões: parenteses
*/
let total = (2 + 3) * 5
console.log(total) 
//troca a ordem dos precedentes (ordem das expressões)


/* 
    OPERADORES DE COMPARAÇÃO
        Irá comparar valores e retornar um Boolean como resposta à comparação        
*/
let one = 1
let two = 2

// ==    igual a
console.log( two == 1) //retornará: false
console.log( one == "1") //retornará: true

// !=    diferente de
console.log(one != two) // true
console.log(one != 1) // false
console.log(one != "1") // false

// ===    estritamente igual a
console.log( one === "1") // apesar de ser igual no valor, é diferente no tipo, pois é uma String, então retornará: false
console.log( one === 1) // true (igual no valor e no tipo)

// !==    estrittamente diferente de
console.log( two !== "2") // true
console.log( two !== 2) // false

// >    maior que
    console.log( one > two ) //false

// >=    maior ou igual a
    console.log(one >= 1) //true
    console.log(two >= 1)//true

// <    menor que
    console.log(one < two)//true

// <=    menor ou igual a
    console.log(one <= two)//true
    console.log(one <= 1)//true
    console.log(one <= 0)//false
