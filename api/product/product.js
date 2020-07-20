/**
 * GET     /api/products           ->  getProducts
 * POST    /api/products           ->  createProduct
 * PUT     /api/products           ->  updateProduct
 * DELETE  /api/products           ->  deleteProduct
 * GET     /api/products/:id       ->  getProductById
 */

const Product = require('./product.model');
const { handleWithData, handleWithError, handleEntityNotFound } = require('../../utils/handlers');

/**
 * Get list of products
 *
 * @param {*} req
 * @param {*} res
 */
async function getProducts(req, res) {
  Product.find({}, '').exec()
    .then(handleWithData(res, 'Successfully retrieved products.'))
    .catch(handleWithError(res, 'Failure retrieving products.'));
}

/**
 * Gets an existing product by id
 *
 * @param {*} req
 * @param {*} res
 */
async function getProductById(req, res) {
  const { id } = req.params;
  Product.findById(id).exec()
    .then(handleEntityNotFound(res, `Product not found for id: ${id}.`))
    .then(handleWithData(res, `Successfully retrieved product with id: ${id}.`))
    .catch(handleWithError(res, `Unable to find product with id: ${id}`));
}

/**
 * Creates a new product
 *
 * @param {*} req
 * @param {*} res
 */
async function createProduct(req, res) {
  const { body } = req;
  Product.create(body)
    .then(handleWithData(res, 'Product was created successfully.', 201))
    .catch(handleWithError(res, 'Failure creating product.'));
}

/**
 * Updates an existing product
 *
 * @param {*} req
 * @param {*} res
 */
async function updateProduct(req, res) {
  const { body, params } = req;
  Product.findByIdAndUpdate(params.id, body)
    .then(handleWithData(res, 'Product was updated successfully.'))
    .catch(handleWithError(res, 'Failure updating product.'));
}

/**
 * Deletes an existing product
 *
 * @param {*} req
 * @param {*} res
 */
async function deleteProduct(req, res) {
  const { id } = req.params;
  Product.findByIdAndDelete(id)
    .then(handleWithData(res, 'Product was deleted successfully.'))
    .catch(handleWithError(res, 'Failure deleting product.'));
}

module.exports = {
  getProducts, createProduct, updateProduct, deleteProduct, getProductById,
};
