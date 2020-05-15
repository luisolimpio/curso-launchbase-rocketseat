const tecs = {
    props: [
        {nome: "C++", especialidade: "Desktop"},
        {nome: "Python", especialidade: "Data Science"},
        {nome: "JavaScript", especialidade: "Web/Mobile"}
    ]
}

const user = {
    nome: "Luis",
    idade: 20,
    tecnologias: [tecs.props[2], tecs.props[1]]
}

console.log(`O usuário ${user.nome} tem ${user.idade} anos e usa a tecnologia ${user.tecnologias[0].nome}
com especialidade em ${user.tecnologias[0].especialidade}`)