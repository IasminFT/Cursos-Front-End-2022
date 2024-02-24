/*  ###Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit 
    e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/
  
// eu fiz:

function fahrenheit () {
    let celsius = "34"
    console.log( `${celsius} graus Celsius equivale à: 
    ${[(Number(celsius) * 9) / 5] + 32} graus Fahrenheit`)
}

function celsius () {
    let fahrenheit = "47"
    console.log( `${fahrenheit} graus Fahrenheit equivale à: 
    ${[(Number(fahrenheit) - 32) * 5] / 9} graus Celsius`)
}


// correção do professor:

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //FLUXO DE ERRO
    if(!celsiusExists && !fahrenheitExists){
        throw new Error ('Grau não identificado')
    }

    // FLUXO IDEAL, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace('F', ''));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign= 'C'

    // FLUXO CONTRÁRIO, C -> F
    if(celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace('C', ''));
        formula = (celsius) => (celsius * 9/5) + 32
        degreeSign= 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try{
    console.log(transformDegree('120C'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('74Z'))
} catch(error){
    console.log(error.message)
}

