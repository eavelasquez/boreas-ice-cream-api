/**
 * Product
 * @author Esteban Velásquez <eavc.30@gmail.com>
 */

const { Router } = require('express');
const Product = require('./product');

const router = new Router();

router.get('/', Product.getProductById);
router.get('/:id', Product.getProductById);
router.post('/', Product.createProduct);
router.put('/', Product.updateProduct);
router.delete('/', Product.deleteProduct);

module.exports = router;
