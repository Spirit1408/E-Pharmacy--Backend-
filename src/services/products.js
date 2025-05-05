import Product from '../db/models/product.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getProducts = async (filter = {}, page = 1, limit = 5) => {
  const query = {};
  
  if (filter.name) {
    query.name = { $regex: filter.name, $options: 'i' };
  }

  const skip = (page - 1) * limit;

  const total = await Product.countDocuments(query);

  const products = await Product.find(query)
    .skip(skip)
    .limit(limit);

  const pagination = calculatePaginationData(total, limit, page);

  return { products, pagination };
};

export const addNewProduct = async (productData) => {
  const newProduct = await Product.create(productData);
  return newProduct;
};

export const updateProduct = async (productId, productData) => {

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      productData,
      { new: true }
    );
    
    if (!updatedProduct) {
      throw new Error('Product not found');
    }
    
    return updatedProduct;
};

export const deleteProduct = async (productId) => {
  const deletedProduct = await Product.findByIdAndDelete(productId);
  
  if (!deletedProduct) {
    throw new Error('Product not found');
  }
  
  return deletedProduct;
};