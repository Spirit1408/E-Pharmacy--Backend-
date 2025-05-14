import {
  getSuppliers,
  addNewSupplier,
  updateSupplier,
} from '../services/suppliers.js';

export const getSuppliersController = async (req, res) => {
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
      message: 'Invalid page number',
    });
  }

  if (isNaN(limitNum) || limitNum < 1) {
    return res.status(400).json({
      status: 400,
      message: 'Invalid limit number',
    });
  }

  const result = await getSuppliers(filter, pageNum, limitNum);

  res.json({
    status: 200,
    message: 'Suppliers list',
    data: result.suppliers,
    pagination: result.pagination,
  });
};

export const addNewSupplierController = async (req, res) => {
  const supplierData = req.body;

  const newSupplier = await addNewSupplier(supplierData);

  res.status(201).json({
    status: 201,
    message: 'Supplier added successfully',
    data: newSupplier,
  });
};

export const updateSupplierController = async (req, res) => {
  const { supplierId } = req.params;
  const supplierData = req.body;

  const updatedSupplier = await updateSupplier(supplierId, supplierData);

  res.json({
    status: 200,
    message: 'Supplier updated successfully',
    data: updatedSupplier,
  });
};
