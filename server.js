var express = require('express')
var app = express()
var crud = require('./server/crudDynamo.js')

var crudFav = crud("fav")

app.get('/api/fav/create', function(req, res) {
    res.json(
        crudFav.create({
            name: "mma",
            url: "google.com"
        }))
})

app.get('/api/fav/:id', function(req, res) {
    crudFav.read(req.params.id, fav => {
        res.json(fav)
    })
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})

module.exports = app;
