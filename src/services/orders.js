import Order from '../db/models/order.js';

export const getOrders = async (filter = {}) => {
  const query = {};
  
  if (filter.name) {
    query.name = { $regex: filter.name, $options: 'i' };
  }
  
  return await Order.find(query)
    .select('photo name address products price status order_date');
};