import { getCustomers, getCustomerById } from '../services/customers.js';

export const getCustomersController = async (req, res) => {
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
  
  const result = await getCustomers(filter, pageNum, limitNum);
  
  res.json({
    status: 200,
    message: 'Customers list',
    data: result.customers,
    pagination: result.pagination,
  });
};

export const getCustomerByIdController = async (req, res) => {
  const { customerId } = req.params;
  
  const customer = await getCustomerById(customerId);
  
  res.json({
    status: 200,
    message: 'Customer info',
    data: customer
  });
};