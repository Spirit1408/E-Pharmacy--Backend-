# E-Pharmacy Backend

A RESTful API backend for an E-Pharmacy management system built with Node.js, Express, and MongoDB.

## Features

- User authentication and authorization
- Dashboard analytics
- Product management
- Order processing
- Supplier management
- Customer management

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB/Mongoose** - Database and ODM
- **JWT** - Authentication
- **Joi** - Data validation
- **Bcrypt** - Password hashing

## Prerequisites

- Node.js (v16 or higher)
- MongoDB

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Spirit1408/E-Pharmacy--Backend-.git
cd E-Pharmacy--Backend-
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add the following variables:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Login user
- `GET /api/user/logout` - Logout user

### Dashboard
- `GET /api/dashboard` - Get dashboard analytics

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create a new order
- `PUT /api/orders/:id` - Update an order
- `DELETE /api/orders/:id` - Delete an order

### Suppliers
- `GET /api/suppliers` - Get all suppliers
- `GET /api/suppliers/:id` - Get supplier by ID
- `POST /api/suppliers` - Create a new supplier
- `PUT /api/suppliers/:id` - Update a supplier
- `DELETE /api/suppliers/:id` - Delete a supplier

### Customers
- `GET /api/customers` - Get all customers
- `GET /api/customers/:id` - Get customer by ID
- `POST /api/customers` - Create a new customer
- `PUT /api/customers/:id` - Update a customer
- `DELETE /api/customers/:id` - Delete a customer

## Project Structure

```
src/
├── constants/      # Application constants
├── controllers/    # Request handlers
├── db/             # Database models and connection
├── middlewares/    # Express middlewares
├── routers/        # API routes
├── services/       # Business logic
├── utils/          # Utility functions
├── validation/     # Request validation schemas
├── index.js        # Application entry point
└── server.js       # Express server configuration
```

## Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with hot reload
- `npm run lint` - Run ESLint

## License

ISC
