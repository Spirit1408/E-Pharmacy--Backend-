import { getOrders } from '../services/orders.js';

export const getOrdersController = async (req, res) => {
    const { name } = req.query;
    
    const filter = {};
    
    if (name) {
      filter.name = name;
    }
    
    const orders = await getOrders(filter);
    
    res.json({
      status: 200,
      message: 'List of orders',
      data: orders,
    });
};