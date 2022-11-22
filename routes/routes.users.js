const express = require('express')
const router = express.Router()
const API = require('../DB.json')



router.get('/', async(req,res) => {    
    res.json(API)
})

router.get('/:id', async(req,res) => {
    const id = req.params.id
    const data = API.find(a => a.id == id)
    res.json(data)
})
// Eliminar
router.delete('/:id', async(req,res) => {
    const id = req.params.id
    const busqueda = API.find(e => e.id == id)
    const index = API.indexOf(busqueda)
    const data = API.splice(index,1)
    res.json({
        message: 'Elemento eliminado',
        data
    })
})

router.post('/', (req,res) => {
    const body = req.body
    API.push(body)
    res.json(API)
})


router.post('/:id', (req,res) => {
    const id = req.params.id
    const body = req.body
    API.push(body)
    res.json(API)
})


// Editar
router.put('/:id', async(req,res) => {
    const id = req.params.id
    const body = req.body
    const busqueda = API.find(e => e.id == id)
    const index = API.indexOf(busqueda)
    API[index] = body
    res.json({
        message: 'Elemento eliminado',
        API
    })
})
module.exports = router