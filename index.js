const express = require('express');
const app = express()
const path = require('path')

/* Enable Path Shortcuts */
app.use('/env',express.static(__dirname+'/src/assets/env'))
app.use('/logos',express.static(__dirname+'/src/assets/logos'))
app.use('/music',express.static(__dirname+'/src/assets/music'))
app.use('/sounds',express.static(__dirname+'/src/assets/sprites'))
app.use('/stylesheets',express.static(__dirname+'/src/assets/stylesheets'))

app.use('/',express.static(__dirname+'/'))
app.get('/',function(response){
    response.sendFile(path.join(__dirname+'/index.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

