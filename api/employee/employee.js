/**
 * GET     /api/employees           ->  getEmployees
 * POST    /api/employees           ->  createEmployee
 * PUT     /api/employees           ->  updateEmployee
 * DELETE  /api/employees           ->  deleteEmployee
 * GET     /api/employees/:id       ->  getEmployeeById
 */

const Employee = require('./employee.model');
const { handleWithData, handleWithError, handleEntityNotFound } = require('../../utils/handlers');

/**
 * Get list of employees
 *
 * @param {*} req
 * @param {*} res
 */
async function getEmployees(req, res) {
  return Employee.find({}, '-password -lastActive').exec()
    .then(handleWithData(res, 'Successfully retrieved employees.'))
    .catch(handleWithError(res, 'Failure retrieving employees.'));
}

/**
 * Gets an existing employee by id
 *
 * @param {*} req
 * @param {*} res
 */
async function getEmployeeById(req, res) {
  const { id } = req.params;
  return Employee.findById(id).exec()
    .then(handleEntityNotFound(res, `Employee not found for id: ${id}.`))
    .then(handleWithData(res, `Successfully retrieved employee with id: ${id}.`))
    .catch(handleWithError(res, `Unable to find employee with id: ${id}`));
}

/**
 * Creates a new employee
 *
 * @param {*} req
 * @param {*} res
 */
async function createEmployee(req, res) {
  const { body } = req;
  return Employee.create(body)
    .then(handleWithData(res, 'Employee was created successfully.', 201))
    .catch(handleWithError(res, 'Failure creating employee.'));
}

/**
 * Updates an existing employee
 *
 * @param {*} req
 * @param {*} res
 */
async function updateEmployee(req, res) {
  const { body, params } = req;
  return Employee.findByIdAndUpdate(params.id, body)
    .then(handleWithData(res, 'Employee was updated successfully.'))
    .catch(handleWithError(res, 'Failure updating employee.'));
}

/**
 * Deletes an existing employee
 *
 * @param {*} req
 * @param {*} res
 */
async function deleteEmployee(req, res) {
  const { id } = req.params;
  return Employee.findByIdAndDelete(id)
    .then(handleWithData(res, 'Employee was deleted successfully.'))
    .catch(handleWithError(res, 'Failure deleting employee.'));
}

module.exports = {
  getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployeeById,
};
