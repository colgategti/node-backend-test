const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const currentDate = new Date();


// Conexão do db

var connection = mysql.createConnection({
    host: "172.17.0.2",
    user: "root",
    password: "password",
    database: "node_test",
    port: "3306"
})

connection.connect((err)=>{
    if (err){
        throw err
    } else{
        console.log("connected")
    }
})


// Acesso da rota GET all em http://localhost:3000/api/usuario

router.get('/usuario', (req, res) => {
    connection.query(
        'SELECT * FROM usuarios;',
        (error, result)=>{
            if (error) {
                return res.status(500).send({error: error})
            }
            else {
                console.log('Usuários encontrados com sucesso!')
                return res.status(200).send({response: result})
            }
        })
})

router.post('/usuario', (req, res, next) => {
    res.send({
        mensagem: 'uso do POST'
    })
})

router.put('/usuario/:id_usuario', (req, res, next) =>{
    res.send({
        mensagem:'uso do PUT'
    })
})

router.delete('/usuario/:id_usuario', (req, res, next)=>{
    res.send({
        mensagem:'uso do DELETE'
    })
})

module.exports = router;
