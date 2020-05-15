const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

server.use(express.static('public'))    

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("index", { recipes: data })
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/recipe", function(req, res){
    return res.render("recipe", { recipes: data })
})

server.get("/recipe/:index", function(req, res){
    const recipeIndex = req.params.index
    return res.render("recipe-details", { recipe: data[recipeIndex] })
})

server.get("/:index", function(req, res){
    const recipeIndex = req.params.index
    return res.render("recipe-details", { recipe: data[recipeIndex] })
})

server.use(function(req, res){
    return res.status(404).render("not-found")
})

server.listen(5000, function(req, res){
    console.log('Server is running')
})