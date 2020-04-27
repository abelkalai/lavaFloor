const express = require('express');
const app = express()
const path = require('path')


app.use("/gameObjects", express.static(__dirname + "/./src/lib/gameObjects"));
app.use('/',express.static(__dirname+'/'))
app.get('/',function(response){
    response.sendFile(path.join(__dirname+'/index.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

