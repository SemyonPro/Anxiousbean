import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @desc    Get logged in user products
// @route   GET /api/products
// @access  Private
const getProducts = asyncHandler(async (req, res) => {
  const Products = await Product.find({ user: req.user._id });
  res.json(Products);
});

//@description     Fetch single Product
//@route           GET /api/products/:id
//@access          Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

//@description     Create single Product
//@route           GET /api/products/create
//@access          Private
const CreateProduct = asyncHandler(async (req, res) => {
  const { name, info, img, price } = req.body;

  if (!name || !info || !img || !price) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const product = new Product({ user: req.user._id, name, info, img, price });

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);
  }
});

//@description     Delete single Product
//@route           GET /api/product/:id
//@access          Private
const DeleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (product) {
    await product.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private
const UpdateProduct = asyncHandler(async (req, res) => {
  const {  name, info, img, price  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (product) {
    product.name = name;
    product.info = info;
    product.img = img;
    product.price = price;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProductById, getProducts, CreateProduct, DeleteProduct, UpdateProduct };
