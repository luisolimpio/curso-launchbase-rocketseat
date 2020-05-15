const users = [

    {
    nome: "Luis",
    tecnologia: ["JavaScript", "Java"]
    },

    {
        nome: "Felipe",
        tecnologia: ["Java", "HTML", "CSS"]
    },

    {
        nome: "Filipe",
        tecnologia: ["Photoshop", "CSS"]
    }
]

function checaSeUsaCss(user){

    for(let i = 0; i < user.tecnologia.length; i++){
        if(user.tecnologia[i] === "CSS")
            return true;
    }

    return false
}

for(let i = 0; i < users.length; i++){

    if(checaSeUsaCss(users[i]))
        console.log(`${users[i].nome}, trabalha com CSS`)
}