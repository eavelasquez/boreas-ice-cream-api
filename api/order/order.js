/**
 * GET     /api/orders           ->  getOrders
 * POST    /api/orders           ->  createOrder
 * PUT     /api/orders           ->  updateOrder
 * DELETE  /api/orders           ->  deleteOrder
 * GET     /api/orders/:id       ->  getOrderById
 */

const Order = require('./order.model');
const { handleWithData, handleWithError, handleEntityNotFound } = require('../../utils/handlers');

/**
 * Get list of orders
 *
 * @param {*} req
 * @param {*} res
 */
async function getOrders(req, res) {
  Order.find({}, '').exec()
    .then(handleWithData(res, 'Successfully retrieved orders.'))
    .catch(handleWithError(res, 'Failure retrieving orders.'));
}

/**
 * Gets an existing order by id
 *
 * @param {*} req
 * @param {*} res
 */
async function getOrderById(req, res) {
  const { id } = req.params;
  Order.findById(id).exec()
    .then(handleEntityNotFound(res, `Order not found for id: ${id}.`))
    .then(handleWithData(res, `Successfully retrieved order with id: ${id}.`))
    .catch(handleWithError(res, `Unable to find order with id: ${id}`));
}

/**
 * Creates a new order
 *
 * @param {*} req
 * @param {*} res
 */
async function createOrder(req, res) {
  const { body } = req;
  Order.create(body)
    .then(handleWithData(res, 'Order was created successfully.', 201))
    .catch(handleWithError(res, 'Failure creating order.'));
}

/**
 * Updates an existing order
 *
 * @param {*} req
 * @param {*} res
 */
async function updateOrder(req, res) {
  const { body, params } = req;
  Order.findByIdAndUpdate(params.id, body)
    .then(handleWithData(res, 'Order was updated successfully.'))
    .catch(handleWithError(res, 'Failure updating order.'));
}

/**
 * Deletes an existing order
 *
 * @param {*} req
 * @param {*} res
 */
async function deleteOrder(req, res) {
  const { id } = req.params;
  Order.findByIdAndDelete(id)
    .then(handleWithData(res, 'Order was deleted successfully.'))
    .catch(handleWithError(res, 'Failure deleting order.'));
}

module.exports = {
  getOrders, createOrder, updateOrder, deleteOrder, getOrderById,
};
