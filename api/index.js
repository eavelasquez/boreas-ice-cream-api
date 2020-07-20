/**
 * Server main routes.
 * @author Esteban Velásquez <eavc.30@gmail.com>
 */

const Order = require('./order');
const Product = require('./product');
const Category = require('./category');
const Employee = require('./employee');

module.exports = (app) => {
  app.use('/api/orders', Order);
  app.use('/api/products', Product);
  app.use('/api/employees', Employee);
  app.use('/api/categories', Category);
};
