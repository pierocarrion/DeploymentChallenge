const { Router } = require('express')
const Name = require('../models/name')
require('../database');
const router = Router();


router.get('/registrar', async (req, res) => {
    try {
        const { nombre } = req.query;
        const newName = new Name({
            name: nombre
        })
        const name = await newName.save();
        res.status(200).json(newName)

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;