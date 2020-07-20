/**
 * Category model
 */

const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
  name: { type: String, uppercase: true, required: [true, 'Category Name Required'] },
  description: { type: String, default: 'No description' },
});

module.exports = model('Category', CategorySchema);
