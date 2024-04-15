import mongoose from "mongoose";

const product = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    dsc: String,
    category: {
      type: [{ number: Number, name: String }],
    },
    images: {
      type: [{ url: String }],
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", product);
export default productModel;
