import {
  getProducts,
  addNewProduct,
  updateProduct,
  deleteProduct,
} from '../services/products.js';

export const getProductsController = async (req, res) => {
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

  const result = await getProducts(filter, pageNum, limitNum);

  res.json({
    status: 200,
    message: 'List of products',
    data: result.products,
    pagination: result.pagination,
  });
};

export const addNewProductController = async (req, res) => {
  const productData = req.body;

  const newProduct = await addNewProduct(productData);

  res.status(201).json({
    status: 201,
    message: 'Product added successfully',
    data: newProduct,
  });
};

export const updateProductController = async (req, res) => {
  const { productId } = req.params;
  const productData = req.body;

  const updatedProduct = await updateProduct(productId, productData);

  res.json({
    status: 200,
    message: 'Product updated successfully',
    data: updatedProduct,
  });
};

export const deleteProductController = async (req, res) => {
  const { productId } = req.params;

  await deleteProduct(productId);

  res.json({
    status: 200,
    message: 'Product deleted successfully',
  });
};
