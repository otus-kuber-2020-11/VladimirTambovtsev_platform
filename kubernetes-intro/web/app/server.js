const express = require('express')

const app = express()

app.use(express.static('public'));


app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public' + '/index.html');
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})