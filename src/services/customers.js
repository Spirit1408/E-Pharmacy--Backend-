import Customer from '../db/models/customer.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getCustomers = async (filter = {}, page = 1, limit = 5) => {
  const query = {};

  if (filter.name) {
    query.name = { $regex: filter.name, $options: 'i' };
  }

  const skip = (page - 1) * limit;

  const total = await Customer.countDocuments(query);

  const customers = await Customer.find(query).skip(skip).limit(limit);

  const pagination = calculatePaginationData(total, limit, page);

  return { customers, pagination };
};

export const getCustomerById = async (customerId) => {
  const customer = await Customer.findById(customerId);

  if (!customer) {
    throw new Error('Customer not found');
  }

  return customer;
};
