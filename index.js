const express= require('express');
const app= express()
const path = require('path')

app.use('/',express.static(__dirname+'/'))

app.get('/',function(response){
    response.sendFile(path.join(__dirname+'/index.html'))
})

let PORT=3000

app.listen(PORT)

console.log(`Server running on Port ${PORT}`)