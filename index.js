 
const express = require('express')
const app = express()
app.use(express.json());

//imports and consts
let accounts = require("./accounts.js")
const accountRouter = require('./api/accounts/accounts.routes.js');
const PORT = 8000 


//The app
app.use('/accounts',accountRouter);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})