import { Schema, model } from 'mongoose';

const expenseSchema = new Schema(
  {
    name: {
      type: String,
    },
    amount: {
      type: String,
    },
    type: {
      type: String,
      enum: ['Income', 'Expense', 'Error'],
    },
  },
  { versionKey: false, timestamps: false }
);

const Expense = model('expenses', expenseSchema);

export default Expense;