// IF ... ELSE

let temperature = 36.5

if(temperature>=37) {
    console.log('febre')
} else {
    console.log('saudável')
}
//se (if) a variável temperature for maior ou igual 37, a pessoa estará com febre, se não (else), a pessoa estará saudável

if(temperature >= 38.5){
    console.log('febre alta')
} else if (temperature < 38.5 && temperature >= 37 ) {
    console.log('febre moderada')
} else {
    console.log('saudável')
}

//outra forma de fazer é primeiro determinando as variáveis e depois as retomando no if...else
let price = 40
let normalPrice = price <= 50 && price > 40 
let salePrice = price <= 40

if(normalPrice){
    console.log('preço normal')
} else if (salePrice) {
    console.log('produto com desconto')
} else {
    console.log('produto caro')
}



// SWITCH

let expression = 'a'
switch(expression) {
    case 'a':
        //código aqui
        console.log('a')
        break
    case 'b':
        // código para expressão b
        console.log('b')
        break
    default:
        // se nenhum dos casos acima forem cumpridos
        console.log('default')
        break
}
// devido à variável determinada em cima, retornará 'a'

//outro exemplo: (calculadora)
function calculate (number1, operator, number2) {
    let result

    switch (operator){
        case '+':
            result = number1 + number2
            break
        case'-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }
    return result
}
console.log(calculate(4, '*', 8)) //retornará 32
console.log(calculate(3, '+', 10)) //retornará 13
console.log(calculate(12, '%', 9)) //retornará 'não implementado'



/* THROW (disparar, lançar), TRY (tentar) and CATCH (pegar)

  ou seja: 
    significa que vamos tentar executar um bloco de código, e se der algum erro
    ele vai ser disparado e então, esse erro poderá ser capturado
*/

// throw
function sayMyName(name){
    if(name === ''){
        throw new Error("Nome é necessário")
    }

    console.log('depois do erro')
}

//try...catch
try{
    sayMyName()
} catch(e){
    console.log(e)
}