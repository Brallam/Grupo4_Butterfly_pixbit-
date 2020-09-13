const {check,validationResult,body} = require('express-validator');

module.exports= [
        check('name').trim().isLength({min: 1}).withMessage('El nombre es obligatorio'),
        check('nameU').trim().isLength({min: 1}).withMessage('El nombre de usuario es obligatorio'),
        check('email').trim().isEmail().withMessage('El email ingresado es invalido'),
        check('password').trim().isLength({min: 4}).withMessage('La contraseña tiene que tener un minimo de 4 caracteres'),
        body('email').trim().custom(function(value){
          let dbUsers = require('../data/databaseUsers');
          for (let i = 0; i < dbUsers.length; i++) {
            if(dbUsers[i].email == value){
              return false;
            }
          }
          return true;
        }).withMessage('El usuario ya existe'),
        body('Cpassword').trim().custom(function(value, {req}){
          return value == req.body.password
        }).withMessage('Las contraseñas no coinsiden')
      ]
     