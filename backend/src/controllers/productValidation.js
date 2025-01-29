async function productValidation(req) {
  const {
    title,
    description,
    price,
    size,
    Discount,
    Brand,
    Bandwidth,
    Color,
    Pattern,
    Length,
    Offer,
  } = req.body;

  if (
    !title ||
    !description ||
    !price ||
    !size ||
    !Discount ||
    !Brand ||
    !Bandwidth ||
    !Color ||
    !Pattern ||
    !Length ||
    !Offer
  ) {
    return "All fields are required.";
  }

  return "0";
}

export default productValidation;
