/**
 * GET     /api/categories           ->  getCategories
 * POST    /api/categories           ->  createCategory
 * PUT     /api/categories           ->  updateCategory
 * DELETE  /api/categories           ->  deleteCategory
 * GET     /api/categories/:id       ->  getCategoryById
 */

const Category = require('./category.model');
const { handleWithData, handleWithError, handleEntityNotFound } = require('../../utils/handlers');

/**
 * Get list of categories
 *
 * @param {*} req
 * @param {*} res
 */
async function getCategories(req, res) {
  return Category.find({}, '_id name description').exec()
    .then(handleWithData(res, 'Successfully retrieved categories.'))
    .catch(handleWithError(res, 'Failure retrieving categories.'));
}

/**
 * Gets an existing category by id
 *
 * @param {*} req
 * @param {*} res
 */
async function getCategoryById(req, res) {
  const { id } = req.params;
  return Category.findById(id, '_id name description').exec()
    .then(handleEntityNotFound(res, `Category not found for id: ${id}.`))
    .then(handleWithData(res, `Successfully retrieved category with id: ${id}.`))
    .catch(handleWithError(res, `Unable to find category with id: ${id}`));
}

/**
 * Creates a new category
 *
 * @param {*} req
 * @param {*} res
 */
async function createCategory(req, res) {
  const { body } = req;
  return Category.create(body)
    .then(handleWithData(res, 'Category was created successfully.', 201))
    .catch(handleWithError(res, 'Failure creating category.'));
}

/**
 * Updates an existing category
 *
 * @param {*} req
 * @param {*} res
 */
async function updateCategory(req, res) {
  const { body, params } = req;
  return Category.findByIdAndUpdate(params.id, body)
    .then(handleWithData(res, 'Category was updated successfully.'))
    .catch(handleWithError(res, 'Failure updating category.'));
}

/**
 * Deletes an existing category
 *
 * @param {*} req
 * @param {*} res
 */
async function deleteCategory(req, res) {
  const { id } = req.params;
  Category.findByIdAndDelete(id)
    .then(handleWithData(res, 'Category was deleted successfully.'))
    .catch(handleWithError(res, 'Failure deleting category.'));
}

module.exports = {
  getCategories, createCategory, updateCategory, deleteCategory, getCategoryById,
};
