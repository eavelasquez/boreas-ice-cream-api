/**
 * Employee
 * @author Esteban Velásquez <eavc.30@gmail.com>
 */

const { Router } = require('express');
const Employee = require('./employee');

const router = new Router();

router.get('/', Employee.getEmployeeById);
router.get('/:id', Employee.getEmployeeById);
router.post('/', Employee.createEmployee);
router.put('/', Employee.updateEmployee);
router.delete('/', Employee.deleteEmployee);

module.exports = router;
