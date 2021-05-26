const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send({
        mensagem: 'uso do GET'
    })
})

router.post('/', (req, res, next) => {
    res.send({
        mensagem: 'uso do POST'
    })
})

router.put('/', (req, res, next) =>{
    res.send({
        mensagem:'uso do PUT'
    })
})

router.delete('/', (req, res, next)=>{
    res.send({
        mensagem:'uso do DELETE'
    })
})

module.exports = router;