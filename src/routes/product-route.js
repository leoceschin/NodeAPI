'use strict'

const router = require('express').Router();
const productController = require('../controllers/product-controller');

router.get('/', productController.get);
router.post('/', productController.post);
router.put('/:id', productController.put);
router.delete('/', productController.delete);

module.exports = router;
