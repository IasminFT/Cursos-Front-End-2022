//Object
    const person = {
        name: 'John',
        age: 30,
        weight: 88.6,
        isAdmin: true
    }

    console.log(person.name) //define a propriedade que será mostrada, ex: (person.age), (person.name), etc.
    //se utilizar somente: console.log(person) >> vai mostrar todas as propriedades registradas

    console.log(`${person.name} tem ${person.age} anos.`)
    //Faz aparecer a frase, por exemplo: "John tem 30 anos." 


// Array
    const animals = [
        'Lion',
        'Monkey',
        'Cat'
    ] //os intens são enumerados a partir de 0 (ex: 0: "Lion" 1:"Monkey" 2:"Cat")
    
    //acessar valores dentro do Array
        console.log(animals [0]) //define qual dos itens será mostrado, no caso o 0 (Lion)
        //se utilizar somente: console.log(animals) >> vai mostrar todos os itens do Array
