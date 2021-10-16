var express = require('express');
const passport = require('passport');
var router = express.Router();
const usersModel = require('../models/users.model');

const jwtHelper = require('../config/jwtHelper');
const _ = require('lodash'); // for picking specific fields from json 

/* REGISTER  a new user*/
router.post('/register', function (req, res, next) {
  var userObj = new usersModel();
  userObj.userName = req.body.userName;
  userObj.email = req.body.email;
  userObj.password = req.body.password;

  userObj.save((err, responseObj) => {
    if (err) {
      if (err.code == 11000) {
        res.status(422).send(['Duplicate email address found'])
      }
      else {
        return next(err);

      }
    }
    else {
      res.send({ status: 200, message: 'User registered successfully', results: responseObj });
    }
  })



});


router.post('/authenticate', function (req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    //erorr from passport middleware
    if (err) return res.status(400).json(err);
    //registered user
    else if (user) return res.status(200).json({ "token": user.generateJwt() });
    //unknown user or wrong password
    else return res.status(404).json(info);
  })(req, res);
});

router.get('/userProfile', jwtHelper.verifyJwtToken,  (req, res, next)=> {   //function (req, res, next)
  usersModel.findOne({ _id: req._id },
    (err, user) => {
      if (!user)
        return res.status(404).json({ status: false, message: "User record not found" });
      else
        return res.status(200).json({ status: true, user: _.pick(user, ['userName', 'email']) });
    }
  )

});

module.exports = router;
