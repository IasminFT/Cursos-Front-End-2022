/*
    ###Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema numérico 
    para sistema de notas em caracteres tipo A B C

    > de 90 pra cima - A
    > entre 80-89 - B
    > entre 70-79 - C
    > entre 60-69 - D
    > abaixo de 60 - F

*/

function getNota(nota) {
    let notaA = nota >= 90 && nota <= 100
    let notaB = nota <=89 && nota >=80
    let notaC = nota <=79 && nota >=70
    let notaD = nota <=69 && nota >=60
    let notaF = nota <60 && nota >= 0

    let notaFinal;

    if(notaA){
        console.log('A')
    } else if(notaB) {
        console.log('B')
    } else if(notaC){
        console.log('C')
    } else if(notaD){
        console.log('D')
    } else if(notaF){
        console.log('F')
    }else{
        notaFinal = "Nota inválida"
    }

    return notaFinal
}
    
console.log(getNota(101)) //Nota inválida
console.log(getNota(-1)) //Nota inválida
console.log(getNota(0)) //F
console.log(getNota(3)) //F
console.log(getNota(45)) //D
console.log(getNota(60)) //D
console.log(getNota(72)) //C
console.log(getNota(85)) //B
console.log(getNota(97)) //A