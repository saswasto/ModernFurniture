const express = require('express');
const FurnitureController = require('../controllers/furnitureController');

const router = express.Router();
const furnitureController = new FurnitureController();

router.post('/furniture', furnitureController.createFurniture);
router.get('/furniture', furnitureController.getAllFurniture);
router.get('/furniture/:id', furnitureController.getFurnitureById);
router.put('/furniture/:id', furnitureController.updateFurniture);
router.delete('/furniture/:id', furnitureController.deleteFurniture);

module.exports = router;