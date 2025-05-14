import { getOrders } from '../services/orders.js';

export const getOrdersController = async (req, res) => {
  const { name, page = 1, limit = 5 } = req.query;

  const filter = {};

  if (name) {
    filter.name = name;
  }

  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);

  if (isNaN(pageNum) || pageNum < 1) {
    return res.status(400).json({
      status: 400,
      message: 'Invalid page parameter',
    });
  }

  if (isNaN(limitNum) || limitNum < 1) {
    return res.status(400).json({
      status: 400,
      message: 'Invalid limit parameter',
    });
  }

  const result = await getOrders(filter, pageNum, limitNum);

  res.json({
    status: 200,
    message: 'List of orders',
    data: result.orders,
    pagination: result.pagination,
  });
};
