const express = require("express");
const router = express.Router();
const upload = require("./middleware/upload"); // Multer middleware
const cloudinary = require("./cloudinary"); // Cloudinary config
const Product = require("./models/Product"); // Product model

router.post("/add-product", upload.single("image"), async (req, res) => {
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "ecommerce",
    });

    // Create product with image URL
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      imageUrl: result.secure_url, // Save image URL
    });

    await product.save();

    res.status(201).json({
      message: "Product created successfully!",
      product,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating product", error: err.message });
  }
});

module.exports = router;
