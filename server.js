const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (request, response) => {
  response.send('Hello, World!');
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
