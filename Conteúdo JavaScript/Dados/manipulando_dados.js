/* 
    PROTOTYPE

    protótipo: aquilo que foi criado antes
        -série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.

    * prototype-based language (linguagem baseada em protótipos)
    * prototype chain (cadeia de protótipos: de propriedades e valores herdados)
    * _proto_ (propriedade criada referenciando um outro objeto que é anterior ao objeto criado)

        - um objeto criado busca em seu protótipo acima (objeto anterior) métodos e funcionalidades
        - a maioria dos tipos de dados no JS são encapsulados por um objeto (vão herdar toda a cadeia de protótipo)
        - o ultimo _proto_ é o objeto mais 'puro' possível
        - as propriedades q aparecem ao digicat " algumacoisa._proto_" são utilizadas para manipular dados
*/
 

/*
    TYPE CONVERSATION (typecasting)  VS  TYPE COERSION

    * Alteração de um tipo de dado para outro tipo

-Type conversation: capacidade nossa de causar a conversão
-Type coersion: capacidade do java script de forçar uma troca

*/

console.log('9' + 5) //causará uma concatenação e retornará: 95, pois é uma string e um number sendo concatenados 
// coersão de tipo (por parte do JS) >> coersion

console.log(Number('9') + 5) //transformará uma string em um number, levando à soma, e retornará: 14
//alteração explicitamente de um tipo de dado pra outro por nós >> conversation



/* 
    MANIPULANDO STRINGS E NUMEROS 
*/
let string = "123"
console.log(Number(string)) //transforma string em number

let number = 123
console.log(String(number)) //transforma number em string

//Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "Paralelepípedo"
console.log(word.length) //vai retornar: 14 (pois é o numero de letras)
console.log(String(number).length) //vai retonar: 3 (do number estabelecido na linha 39) >> deve-se transformar o number em string para calcular seus caracteres


