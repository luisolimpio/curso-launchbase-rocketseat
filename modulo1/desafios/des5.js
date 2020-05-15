const users = [

    {
    nome: "Luis",
    tecnologia: ["JavaScript", "Java"]
    },

    {
        nome: "Felipe",
        tecnologia: ["Java", "HTML"]
    },

    {
        nome: "Filipe",
        tecnologia: ["Photoshop", "CSS"]
    }
]

function list(){

    for(let i = 0; i < users.length; i++){
        console.log(`${users[i].nome}, trabalha com ${users[i].tecnologia}`)
    }
}

list()