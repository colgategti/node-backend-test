const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send({
        mensagem: 'uso do GET'
    })
})

module.exports = router;