'use.strict'
let express = require('express');
let passport = require('passport'), 
LocalStrategy = require('passport-local').Strategy;
let router = express.Router();

let administratorController = require("../controllers/administratorController");

function requireAuth(req, res, next)
{
    if(!req.isAuthenticated()){
        retssurn res.redirect('/login');
    }
    next();
}

/* GET - Display register auditor page - with /registerAuditor. */
router.get('/registerAuditor', administratorController.DisplayRegisterAuditorPage);
router.post('/registerAuditor', administratorController.ProcessRegisterAuditorPage);

module.exports = router;