let dbProduct = require('../data/dataBase') 
// SEQUELIZE
const db = require('../database/models')
module.exports={
    index:((req,res)=>{

        db.sequelize.query('SELECT * FROM users')
        .then(function(resultados){
            let usuarios = resultados[0]   
            console.log(usuarios)
        })
        let bpb=dbProduct.filter(m =>{
            return m.propiedad==true;
        })
        let af=dbProduct.filter(m=>{
            return m.propiedad==false;
        })

        res.render("index", {
            title: "Butterfly PixBit",
            bpb:bpb,
            af:af,
            userLog: req.session.userLog
        })
    })
    }