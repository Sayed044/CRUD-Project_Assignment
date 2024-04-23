const express = require('express');
const CrudController = require('../controller/CrudController');


const router =express.Router();


router.post('/CreateFood',CrudController.CreateFood)
router.get('/AllFood',CrudController.AllFood)
router.get('/AllFoodByID/:id',CrudController.AllFoodByID)
router.post('/UpdateFood/:id',CrudController.UpdateFood)
router.get('/DeleteFood/:id',CrudController.DeleteFood)


module.exports=router;