const mongoose = require("mongoose");

let ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: String,
      required: true,
      default: null,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    isNewProduct: {
      type: Boolean,
      default: true,
    },
    sku: {
      type: String,
      unique: true,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      minlength: 3,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("product", ProductSchema);
