var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var crud = require('./server/crudDynamo.js')

var crudFav = crud("fav")

app.post('/api/fav/create', function(req, res) {
    let fav = req.body.fav
    res.json(
        crudFav.create({
            name: fav.name,
            url: fav.url
        }))
})

app.get('/api/fav/:id', function(req, res) {
    crudFav.read(req.params.id, fav => {
        res.json(fav)
    })
})
app.get('/api/fav', function(req, res) {
    crudFav.readAll(favs => {
        res.json(favs)
    })
})

app.listen(3001, function() {
    console.log('Example app listening on port 3001!')
})

module.exports = app;
