let accounts = require("../../accounts")

//GET

// Accounts fetch
exports.accountsGet =(req, res) => {
    res.json(accounts)
    res.status(200)
  }


// Account fetch from name with Query
exports.accountFetch =(req, res) => {
    req.query;
    const { username } = req.params;
    const {currency} = req.query
    if(accounts.find((account) => account.username.toLowerCase === username.toLowerCase)){
        accounts.forEach(account => {
            if(account.username.toLowerCase === username.toLowerCase){
                account.funds= account.funds+" "+currency
            }
            res.json(accounts.find((account) => account.username.toLowerCase === username.toLowerCase))
            
        })
        res.status(200)
    }
}

// OLD FETCH WITHOUT QUERY

// exports.accountFetch =(req, res) => {
//     const { username } = req.params;
//     if(accounts.find((account) => account.username.toLowerCase === username.toLowerCase)){
//     res.json(accounts.find((account) => account.username.toLowerCase === username.toLowerCase))
//     res.status(200)
//     }
//   } 

//POST

// Account Create
exports.accountCreate = (req, res) => {
    const id = accounts.length+1 
    const username = req.body.username
    let newAccount = {
        id: id,
        username: username,
        funds: 0,
    }
    accounts.push(newAccount)
    // console.log(name)
    res.json(newAccount)
    res.status(201)
};

// Account Delete
exports.accountDelete = (req, res) => {
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
  }
  
//PUT 

// Account Modify
exports.accountModify =(req, res) => {
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
}