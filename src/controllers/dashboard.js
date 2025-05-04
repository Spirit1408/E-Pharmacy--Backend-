import {
  getProductsCount,
  getSuppliersCount,
  getCustomersCount,
  getLatestCustomers,
  getLatestExpenses,
} from '../services/dashboard.js';

export const getDashboardController = async (req, res) => {
  const productsCount = await getProductsCount();
  const suppliersCount = await getSuppliersCount();
  const customersCount = await getCustomersCount();
  const latestCustomers = await getLatestCustomers(5);
  const latestExpenses = await getLatestExpenses(6);

  res.json({
    status: 200,
    message: 'Dashboard data fetched successfully',
    data: {
      total_products: productsCount,
      total_suppliers: suppliersCount,
      total_customers: customersCount,
      latest_customers: latestCustomers,
      latest_expenses: latestExpenses,
    },
  });
};
