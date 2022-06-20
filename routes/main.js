const { Router } = require('express')
const router = Router()
const Tienda =[]
   

router.get('/', (req, res) => {
  res.render('productos',{Tienda,  hasAny : true})
})
router.get('/producto', (req, res) => {
    res.render('mostrar',{Tienda,  hasAny : true})
  })
 

router.post('/producto', (req, res) => {
    Tienda.push(req.body) 
    res.redirect('/producto') 
   
   })

  





module.exports = router