import Supplier from '../db/models/supplier.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getSuppliers = async (filter = {}, page = 1, limit = 5) => {
  const query = {};
  
  if (filter.name) {
    query.name = { $regex: filter.name, $options: 'i' };
  }

  const skip = (page - 1) * limit;

  const total = await Supplier.countDocuments(query);

  const suppliers = await Supplier.find(query)
    .skip(skip)
    .limit(limit);

  const pagination = calculatePaginationData(total, limit, page);

  return { suppliers, pagination };
};

export const addNewSupplier = async (supplierData) => {
  const newSupplier = await Supplier.create(supplierData);
  return newSupplier;
};

export const updateSupplier = async (supplierId, supplierData) => {
  const updatedSupplier = await Supplier.findByIdAndUpdate(
    supplierId,
    supplierData,
    { new: true }
  );
  
  if (!updatedSupplier) {
    throw new Error('Supplier not found');
  }
  
  return updatedSupplier;
};