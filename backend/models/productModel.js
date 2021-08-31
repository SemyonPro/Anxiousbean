import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    date_created:{
        type:Date, default:Date.now()
      },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
