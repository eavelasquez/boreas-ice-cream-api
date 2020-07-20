/**
 * Order
 * @author Esteban Velásquez <eavc.30@gmail.com>
 */

const { Router } = require('express');
const Order = require('./order');

const router = new Router();

router.get('/', Order.getOrderById);
router.get('/:id', Order.getOrderById);
router.post('/', Order.createOrder);
router.put('/', Order.updateOrder);
router.delete('/', Order.deleteOrder);

module.exports = router;
