import Customer from '../db/models/customer.js';
import Product from '../db/models/product.js';
import Supplier from '../db/models/supplier.js';
import Expense from '../db/models/expense.js';

export const getProductsCount = async () => {
  return await Product.countDocuments();
};

export const getSuppliersCount = async () => {
  return await Supplier.countDocuments();
};

export const getCustomersCount = async () => {
  return await Customer.countDocuments();
};

export const getLatestCustomers = async (limit = 5) => {
  return await Customer.find()
    .sort({ register_date: -1 })
    .limit(limit)
    .select('image name email spent');
};

export const getLatestExpenses = async (limit = 6) => {
  return await Expense.find().limit(limit).select('name amount type');
};
