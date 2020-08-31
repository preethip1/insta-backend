const express = require('express')
const app = express()
const port = 8000
const instagram = require('./insta')
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/test', (req, res) => {
  res.send('This a test request')
})
app.post('/test', (req, res) => {
  res.send('This a post test page')
})

app.get('/insta', instagram.insta)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})