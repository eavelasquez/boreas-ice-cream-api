/**
 * Product model
 */

const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  name: { type: String, uppercase: true, required: [true, 'Product Name Required'] },
  price: { type: Number, required: [true, 'Product Price Required'] },
  image: { type: String },
  quantity: { type: Number },
  description: { type: String, required: [true, 'Product Description Required'] },
  category: { type: { type: Schema.Types.ObjectId, ref: 'Category' } },
}, { timestamps: true });

/**
 * Validations
 */
ProductSchema
  .path('price')
  .validate((price) => (price >= 0), 'Price cannot be a negative value');

ProductSchema
  .path('quantity')
  .validate((quantity) => (quantity >= 0), 'Quantity cannot be a negative value');

module.exports = model('Product', ProductSchema);
