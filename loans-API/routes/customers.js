var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
const customerModel = require('../models/customers.model');
/* GET all customers */
router.get('/list', function(req, res, next) {
    customerModel.find(function(err,customerListResponse){
        if(err){
            res.send({status: 500, message:'unable to findcustomer'});
        }
        else{
            let recordCount=customerListResponse.length
            res.send({status: 200, RecordCount : recordCount, results : customerListResponse});
        }
    });
 
});

/* GET a particular customers */
router.get(('/view/:id'),function(req, res, next) {
    const userId = req.params.id;
    
    customerModel.findById( userId, function(err,customerResponse){
        if(err){
            res.send({status: 500, message:'unable to find the customer'});
        }
        else{
           
            res.send({status: 200,message:"data retrieved successfully", id: req.params.id,  results : customerResponse});
        }
    });
 
});

// employeeRoute.route('/editEmployee/:id').get(function (req, res) {
//     let id = req.params.id;
//     employeeModel.findById(id, function (err, employee) {
//     res.json(employee);
//     });
//    });

/* create a new user */
router.post('/add', function(req, res, next) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let emailAddress = req.body.emailAddress;
    let phoneNumber = req.body.phoneNumber;
    let dob = req.body.dob;
    let department= req.body.department;

    let customerObj = new customerModel ({ // this new customerModel is not needed for Update
        firstName :firstName,
        lastName : lastName,
        emailAddress : emailAddress,
        phoneNumber: phoneNumber,
        dob :dob,
        department:department
    });
    customerObj.save(function(err,customerObj){
        if(err){
            res.send({status: 500, message:'Unable to add new customer'});
        }
        else{
            res.send({status: 200, message:'New customer added successfully', customerDetails : customerObj});
        }
    });
   
    
  });

  /*update a  user */
router.put('/update/:id', function(req, res, next) { // every data that we send from frontEnd will be in 'req'
     const userId = req.params.id;              // req.params  will have link
    let firstName = req.body.firstName;        // req.body refers to the object that we send from frontEnd
    let lastName = req.body.lastName;
    let emailAddress = req.body.emailAddress;  //email is not updating
    let phoneNumber = req.body.phoneNumber;
    let dob = req.body.dob;
    let department= req.body.department;

    let customerObj = { // this new customerModel is not needed for Update
        firstName :firstName,
        lastName : lastName,
        emailAddress : emailAddress,
        phoneNumber: phoneNumber,
        dob :dob,
        department:department
    };
    
    customerModel.findByIdAndUpdate(userId,customerObj, function(err,customerResponse){
        if(err){
            res.send({status: 500, message:'Unable to find the customer'});
        }
        else{
           
            res.send({status: 200, message:'Customer updated successfully', results : customerResponse });
        }
    });
    
  });

/* delete a user */
router.delete('/delete/:id', function(req, res, next) {
    const userId = req.params.id;
    customerModel.findByIdAndDelete(userId, function(err,customerResponse){
        if(err){
            res.send({status: 500, message:'unable to delete the customer'});
        }
        else{
           
            res.send({status: 200, message:"Customer deleted sucessfully", results : customerResponse });
        }
    });
  });

//delete multiple customer with given firstname
  router.delete('/delete-multiple', function(req, res, next) {
    
    customerModel.deleteMany({'firstName': req.query.firstName}, function(err,customerResponse){
        if(err){
            res.send({status: 500, message:'unable to delete the customers'});
        }
        else{
           
            res.send({status: 200, message:"Customers deleted sucessfully", results : customerResponse });
        }
    });
  });

/* search a user */
router.get('/search/:id', function(req, res, next) {
    res.send('respond with a resource');
  });

module.exports = router;