// Import necessary libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/foodDeliveryApplication', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

// Define MongoDB Schema
const productSchema = new mongoose.Schema({
  totalSize: Number,
  type_id: Number,
  offset: Number,
  products: [{
    id: Number,
    name: String,
    description: String,
    price: Number,
    stars: Number,
    img: String,
    location: String,
    createdAt: String,
    updatedAt: String,
    typeId: Number,
  }],
});

const Product = mongoose.model('Product', productSchema);

// Create Express app
const app = express();

// Middleware
app.use(cors());

// Define route to fetch products
app.get('/getProducts', async (req, res) => {
  try {
    const products = await Product.find();
    console.log('Retrieved products:', products);
    res.json(products);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: err.message });
  }
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
