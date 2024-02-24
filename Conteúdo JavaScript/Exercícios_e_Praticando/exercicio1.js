// 1. Declare uma variável de nome weight
 var weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight) //R: undefined

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer): inteiro
        * stars: Number (float): quebrado
        * isSubscribed: Boolean
*/
let name = "Iasmin"
let age = 17
let stars = 4.7
let isSubscribed = true

/* 4. A variável student abaixo é de que tipo de dado?
        let student = {}
        R: é do tipo object

    4.1. Atribua a ela as mesmas propriedades e valores do exercício 3

    4.2. Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name>, <age> e <weight> pelos valores de cada propriedade do objeto */

    let student = {
        name: 'Iasmin',
        age: 17,
        stars: 4.3,
        isSubscribed: true,
        weight: 48
    }
    console.log(`${student.name}, de idade ${student.age}, pesa ${student.weight} kg.`)

/* 5. Declare uma variável de tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio */
    let students = []

/* 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array) */
    students = [
        student
    ]
    console.log(students)

/* 7. Coloque no console o valor da posição zero do Array acima */
    console.log(students [0])

/* 8. Crie um novo student e coloque na posição 1 do Array students */
    const john = {
        name: 'John',
        age: 32,
        weight: 80,
        isSubscribed: true
    }
    students = [
        student,
        john
    ]
    console.log (students)

/* 9. Sem rodar o código, diga qual é a resposta do código e por que? Após sua resposta, rode o código e veja se voce acertou:
    
    console.log(a)
    var a = 1

    R: undefined, pois o valor do a (1) foi deferido depois do console.log
*/