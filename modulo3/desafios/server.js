const express = require ('express')
const nunjucks = require('nunjucks')
const data = require("./data")

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("view", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/about", function(req, res) {
    const about = {
        avatar_url: "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
        name: "Empresa Rocketseat",
        subtitle: "Ensino e desenvolvimento em programção.",
        description: 'A <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a> tem as melhores tecnologias em programação, direto ao ponto e do jeito certo.',
        techs: [
            "React",
            "React Native",
            "JavaScript",
            "CSS",
            "HTML"
        ],
        links: [
            { name: "Instagram", url: "https://instagram.com/rocketseat_oficial" },
            { name: "Facebook", url: "https://fb.com/rocketseat"},
            { name: "Github", url: "https://github.com/Rocketseat"},
        ]
    }

    res.render("about", { about })
})

server.get("/", function(req, res) {
    res.render("courses", { items: data})
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(5000, function() {
    console.log('Server is running')
})