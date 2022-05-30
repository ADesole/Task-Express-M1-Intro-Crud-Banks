const express = require('express');
const router = express.Router();


let accounts = require("../../accounts")
const {accountsGet} = require("./accounts.controllers")
const {accountCreate} = require("./accounts.controllers")
const {accountDelete} = require("./accounts.controllers")
const {accountModify} = require("./accounts.controllers")
const {accountFetch} = require("./accounts.controllers")





//Get accounts
router.get('/', accountsGet)

//Fetch Account 
router.get('/:username', accountFetch);


//Create account
router.post('/', accountCreate)

// Delete account
router.post('/:id', accountDelete);
  
// Update account
router.put('/:id', accountModify);





  module.exports = router;