//Estruturas de repetição criam um loop de valores



// FOR

for(let i = 0; i < 10; i++) {
    console.log(i) //retornará os valores de 0 até 9
}

for(let x = 1; x <= 10; x++){
    console.log(x) //retornará os valores de 1 até 10
}

for(let y = 100; y > 0; y--){
    console.log(y) //retornará os valores de 100 até 0 (decrescendo)
}

for(let z = 100; z > 0; z--){
    if(z === 50){
        break;
    } //vai decrescer desde o 100, mas parará quando chegar ao 50
    console.log(z) 
}

for(let w = 10; w > 0; w--){
    if(w === 50){
        continue;
    } //vai decrescer desde o 10, mas ignorará o 5, e continuará a sequência sem ele
    console.log(w) 
}



//WHILE 
//usar quando não souber o momento de parada dos valores

let e = 4895830902;
while(e > 10){
    console.log(e)

    e /= 35;
} // retornará os valores decrescentes até o 'e' não poder mais ser dividido por 35 sem resultar em um número menor que 10



//FOR...OF
let name = 'Iasmin'
let names = ['João', 'Maria', 'Ana']

for(let char of name) {
    console.log(char)
} //retornará cada letra do nome 'Iasmin' separadamente

for(let name of names){
    console.log(name)
} //retronará cada nome do Array names


//FOR...IN
// cria um loop em cima de um objeto, pegando suas propriedades
let person ={
    name: 'john',
    age: 30,
    weight:88.5
}
for(let property in person){
    console.log(property) //retornará: name, age, weight
    console.log(person[property]) //retornará cada propriedade (name, age, weight), seguidas dos seus valores
 }


