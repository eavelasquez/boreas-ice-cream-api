/**
 * Category
 * @author Esteban Velásquez <eavc.30@gmail.com>
 */

const { Router } = require('express');
const Category = require('./category');

const router = new Router();

router.get('/', Category.getCategories);
router.get('/:id', Category.getCategoryById);
router.post('/', Category.createCategory);
router.put('/', Category.updateCategory);
router.delete('/', Category.deleteCategory);

module.exports = router;
