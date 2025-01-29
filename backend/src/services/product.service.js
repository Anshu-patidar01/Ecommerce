import productModel from "../models/ProductModel.js";
const createProduct = async ({
  title,
  category,
  description,
  price,
  size,
  Discount,
  image,
  Brand,
  Bandwidth,
  Color,
  Pattern,
  Length,
  Offer,
}) => {
  if (
    (!title,
    !description,
    !category,
    !price,
    !size,
    !Discount,
    !Brand,
    !Bandwidth,
    !Color,
    !Pattern,
    !Length,
    !Offer)
  ) {
    throw new Error("All fields are required...!");
  }
  const Product = await productModel.create({
    title,
    description,
    category,
    price,
    size,
    Discount,
    image,
    Brand,
    Bandwidth,
    Color,
    Pattern,
    Length,
    Offer,
  });

  return Product;
};

export default createProduct;
