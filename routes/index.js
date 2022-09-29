const { Router } = require('express');
const { append } = require('express/lib/response');
const router = Router()

router.get('/users', function (req, res){
    console.log(req.body);
    res.json({message: 'Hola soy la respuesta'})
})

module.exports = router