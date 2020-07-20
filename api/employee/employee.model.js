/**
 * Employee model
 */

const { Schema, model } = require('mongoose');

const EmployeeSchema = new Schema({
  firstName: { type: String, required: [true, 'First Name Required'] },
  lastName: { type: String, required: [true, 'Last Name Required'] },
  phoneNumber: { type: String, required: [true, 'Contact No Required'] },
  role: { type: String, default: 'employee' },
  salary: { type: Number, required: [true, 'Salary Required'] },
  username: {
    type: String, required: [true, 'Username Required'], unique: true, lowercase: true, trim: true,
  },
  password: { type: String, required: [true, 'Password Required'] },
  lastActive: { type: Date },
  status: { type: Boolean, default: true },
}, { timestamps: true });

/**
 * Validations
 */
EmployeeSchema
  .path('role')
  .validate((value) => /manager|employee/i.test(value), 'role, assigned role is invalid');

/**
 * Virtual
 */
EmployeeSchema
  .virtual('profile')
  .get(() => ({ name: this.name, role: this.role }));

module.exports = model('Employee', EmployeeSchema);
