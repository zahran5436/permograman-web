const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());  // Untuk parsing request body yang berbentuk JSON

// Import routes
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

// Menggunakan routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/transactions', transactionRoutes);

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
