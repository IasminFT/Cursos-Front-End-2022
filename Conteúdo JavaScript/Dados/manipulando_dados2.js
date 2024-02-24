// Manipulando STRINGS E NÚMEROS

    //Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
    let number = 280.384745
    console.log(number.toFixed(2).replace(".",","))
    /* 
        toFixed: função atrelada ao number, ela recebe o número de casas decimais que será estabelecido
            -quando uma função é atrelada a um objeto, ela é chamada de MÉTODO 
        replace: indica o que deverá ser trocado dentro de strings, no caso o ponto será trocado pela vírgula
    */


    //Transformar letras minúsculas em maiúsculas e vice-versa
    let word = "Hello World!"
    console.log(word.toUpperCase()) // retornará: HELLO WORLD!
    console.log(word.toLowerCase()) // retornará: hello world!


// Manipulando STRINGS E ARRAYS

    //Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _ (underscore).
    let phrase = "Eu quero viver o Amor!"
    let myArray = phrase.split(" ") // .split: tira os espaços em branco como estabelecio em (" "), e separa as palavras com espaços em branco entre elas
    let phraseWithUnderscore = myArray.join("_") // .join: vai juntar o Array, com _ separando as palavras, como estabelecido em ("_").
    console.log(phraseWithUnderscore)

    //Verificar se um texto contém uma palavra específica (exemplo: Amor)
    let text = "Eu quero viver!"
    console.log(text.includes("Amor")) //retornará: false (pois na frase não tem a palavra requerida: "Amor")
        //o .includes é case sensitive, ou seja, faz diferença entre palavras maiúsculas e minúsculas

    //Criar Array com construtor
    let theArray = new Array('a','b','c')
    console.log (theArray)

    //Contar elementos de um array
    console.log(["a","b","c"].length) //.lenght: irá contar os elementos da Array >> retornará 3
    console.log([
        "a", 
        {type:"array"}, 
        function(){ return "alo"}
    ].length) //um array pode ter varios tipos de elementos, como objetos e funçoes

    //Para mostrar um determinado elemento da Array:
    console.log([
        "a", 
        {type:"array"}, 
        function(){ return "alo"}
    ][2]) // retornará: alo (elemento 2)

    // Transformar uma cadeia de caracteres e elementos de um array
    let nome = "iasmin"
    console.log(Array.from(nome))// retornará: ["i", "a", "s", "m", "i", "n"]


// Manipulando ARRAYS

    let techs = ["html", "css", "js"]

    //adicionar um item no fim
    techs.push("nodejs")
    
    // adicionar no começo
    techs.unshift("sql")
    
    //remover o do fim
    techs.pop()
   
    //remover do começo
    techs.shift()
    
    //pegar somente alguns determinados elementos do array (determina-se colocando entre os parenteses em qual posiçao do elemento escolhido (de qual até qual))
    techs.slice(1, 2)// retornará: ["css", "js"]
    
    //remover 1 ou mais items em qualquer posição do array
    techs.splice(1,1)// retornará: ["html","js"]
   
    //encontrar a posição de um elemento na array
    let index = techs.indexOf('css')
    console.log(index)// retornará: 1
   
    console.log(techs)