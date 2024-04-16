import productModel from "../models/product.js";

export const getProduct = async (req, res) => {
  const { id } = req.params;

  const product = await productModel.findById(id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({
      msg: "not found",
    });
  }
};
export const createProduct = async (req, res) => {
  const buildPro = new productModel(req.body);
  await buildPro.save();
  res.status(201).json(buildPro);
};
export const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const updatePro = await productModel.updateOne({ _id: id }, { ...req.body });

  return res.status(200).json({
    msg: "update susccesfull",
  });
};
export const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  const deltePro = await productModel.deleteOne({ _id: id });

  return res.status(200).json({
    msg: "delete susccesfull",
  });
};
