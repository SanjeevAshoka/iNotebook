const connectToMongo = require('./db');
connectToMongo();
const express = require('express')
const Path = require('path');
const app = express()
const port = 8000

app.use(express.json());
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})