 
const express = require('express')
const app = express()
app.use(express.json());


let accounts = require("./accounts.js")
const PORT = 8000 



//Fetch account
app.get('/accounts', (req, res) => {
  res.json(accounts)
  res.status(200)
})

//Create account
app.post('/accounts/', (req, res) => {
    const id = accounts.length+1 
    const name = req.body.name
    let newAccount = {
        id: id,
        username: name,
        funds: 0,
    }
    accounts.push(newAccount)
    // console.log(name)
    res.json(newAccount)
    res.status(201)
});

// Delete account
app.post('/accounts/:id', (req, res) => {
    const { id } = req.params;
    console.log(accounts[0].id)
    if(accounts.find((account) => account.id === +id)){
    accounts = accounts.filter((account) => account.id !== +id);
    res.status(204);
    res.end()
    }

    else{
    res.send("Id not found")
    res.status(404);
    res.end()
    }
});

// Update account
app.put('/accounts/:id', (req, res) => {
    const { id } = req.params;
    if(accounts.find((account) => account.id === +id)){
        let username= req.body.username
        let funds = +req.body.funds
        accounts.forEach(account => {
            if(account.id === +id){
                account.username= username
                account.funds=funds
            }
        })

    res.status(204);
    res.end()
    }

    else{
    res.send("Id not found")
    res.status(404);
    res.end()
    }
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})