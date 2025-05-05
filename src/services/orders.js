import Order from '../db/models/order.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getOrders = async (filter = {}, page = 1, limit = 5) => {
  const query = {};
  
  if (filter.name) {
    query.name = { $regex: filter.name, $options: 'i' };
  }

  const skip = (page - 1) * limit;

  const total = await Order.countDocuments(query);

  const orders = await Order.find(query)
    .skip(skip)
    .limit(limit);

  const pagination = calculatePaginationData(total, limit, page);

  return { orders, pagination };
};