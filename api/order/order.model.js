/**
 * Order model
 */

const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
  code: { type: String, required: [true, 'Order Code Required'] },
  total: { type: Number, required: [true, 'Order Amount Required'] },
  products: { type: [{ type: Schema.Types.ObjectId, ref: 'Product' }] },
  employee: { type: { type: Schema.Types.ObjectId, ref: 'Employee' } },
}, { timestamps: true });

/**
 * Validations
 */
OrderSchema
  .path('total')
  .validate((total) => (total >= 0), 'Amount cannot be a negative value');

module.exports = model('Order', OrderSchema);
